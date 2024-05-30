const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http')
const url = require('url')
const mysql = require('./Database')
const app = express()
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./auth');
const session = require("express-session")
// const MySQLStore = require("express-mysql-session")(session);
const bcrypt = require('bcrypt');
// const { register } = require('module');




function verifyUserToken(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(401).send("Access Denied / Unauthorized request");
  try {
    token = token.split(' ')[2] // Remove Bearer from string
    if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
    let verifiedUser = jwt.verify(token, "config.TOKEN_SECRET");   // config.TOKEN_SECRET => 'secretKey'
    console.log(verifiedUser);
    if (!verifiedUser) return res.status(401).send('Unauthorized request')
    req.user = verifiedUser; // user_id & user_type_id
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}
async function IsUser(req, res, next) {
  if (req.user.user_type_id === 0) {
    next();
  }
  return res.status(401).send("Unauthorized!");
}
async function IsAdmin(req, res, next) {
  if (req.user.user_type_id === 1) {
    next();
  } else return res.status(401).send("Unauthorized!");
}







app.use(cors())
app.use('/Arts', express.static(path.join(__dirname, 'public/ServerDisk')))
app.use('/Avatars', express.static(path.join(__dirname, 'public/Avatars')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3001


const mysqlP = require('mysql2/promise');

app.post('/Reg', async (req, res) => {
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    const connection = await mysqlP.createConnection({
      host: "localhost",
      user: "root",
      database: "PickArt",
      password: "AdRootPass123"
    });
    const query = `INSERT INTO user (Login, UserPassword, Email) VALUES('${req.body.name}','${hasPassword}','${req.body.email}')`;
    const [results] = await connection.query(query);
    console.log(results);
    await connection.end(); // Close the connection after query execution
    let payload = { Name: req.body.name, user_type_id: req.body.user_type_id || 0 };
    const token = jwt.sign(payload, "config.TOKEN_SECRET");
    res.status(200).send({ token })
    // res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Log', async (req, res) => {
  try {
    const user = await mysql.query(`SELECT * FROM user where user.Email='${req.body.email}'`);
    // console.log(user[0][0].Email);
    if (user[0][0].Email != null) {
      const validPass = await bcrypt.compare(req.body.password, user[0][0].UserPassword);
      if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");
      let payload = { id: user[0][0].UserId };
      const token = jwt.sign(payload, "config.TOKEN_SECRET");
      res.status(200).header("auth-token", token).send({ "token": token });
    } else {
      res.status(401).send('Invalid mobile')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/User', verifyUserToken, IsUser, async (req, res) => {
  res.status(200).send("User");
});
app.post('/Admin', verifyUserToken, IsAdmin, async (req, res) => {
  res.status(200).send("Admin");
});

app.get('/', async (req, res) => {
  try {
    // console.log(req.query)
    const page = req.query.page
    const limit = 6 * 4
    const offset = (page - 1) * limit
    const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
    const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
    if (page > totalPage || page == 0)
      return;
    else {
      // console.log(offset)
      const [data] = await mysql.query('SELECT * FROM artwork limit ? offset ?', [+limit, +offset])
      res.json(data)
    }
  } catch (error) {
    console.log(error)
  }
})



app.get('/Art', async (req, res) => {
  try {
    // console.log("art: ", req.query)
    const Id = req.query.Id
    const sql = `SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${Id}`
    // const sql =`SELECT * FROM artwork where ArtWorkId=${Id}`
    const [data] = await mysql.query(sql)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.get('/Art/:id', async (req, res) => {
  try {
    const Id = req.params.id
    const sql = `SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${Id}`
    // const sql =`SELECT * FROM artwork where ArtWorkId=${Id}`
    const [data] = await mysql.query(sql)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})
app.get(`/Art/:Id`, (req, res) => {
  // const sql =`SELECT * FROM art where id=${req.params.Id}`
  // const sql =`SELECT * FROM artwork where ArtWorkId=${req.params.Id}`
  const sql = `SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${req.params.Id}`
  // mysql.query(sql,(err, data)=>{
  //     if(err) return res.json(err);
  //     return res.json(data);
  // })
  const [data] = mysql.query(sql)
  return res.json(data);

  // res.send(req.params)
})
app.listen(PORT, () => {
  console.log("Start server");
})
