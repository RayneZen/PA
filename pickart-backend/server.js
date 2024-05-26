const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http')
const url = require('url')
const mysql = require('./Database')
const app = express()
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('./auth');


app.use(cors())
app.use('/Arts', express.static(path.join(__dirname, 'public/ServerDisk')))
app.use('/Avatars', express.static(path.join(__dirname, 'public/Avatars')))
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001



// app.get('/', async (req, res) => {
//     try {
//         // console.log(req.query)
//         const page = req.query.page
//         const limit = 6 * 4
//         const offset = (page - 1) * limit
//         const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
//         const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
//         if (page > totalPage || page == 0)
//             return;
//         else {
//             // console.log(offset)
//             const [data] = await mysql.query('SELECT * FROM artwork limit ? offset ?', [+limit, +offset])
//             res.json(data)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })


// app.get('/2',(req,res)=>{
//     // const sql ="SELECT * FROM art ORDER BY title"
//     const sql ="SELECT * FROM artwork ORDER BY title"
//     mysql.query(sql,(err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })
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
// app.get(`/Art/:Id`,(req,res)=>{
//     // const sql =`SELECT * FROM art where id=${req.params.Id}`
//     // const sql =`SELECT * FROM artwork where ArtWorkId=${req.params.Id}`
//     const sql =`SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${req.params.Id}`
//     // mysql.query(sql,(err, data)=>{
//     //     if(err) return res.json(err);
//     //     return res.json(data);
//     // })
//     const [data]=  mysql.query(sql)
//     return res.json(data);

//     // res.send(req.params)
// })





// ?/////////////////////////////////////////////////////////////


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  app.get( '/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure'
    })
  );
  
  app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  });
  
  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });

  app.listen(PORT, () => {
    console.log("Start server");
})