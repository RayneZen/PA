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
    token = token.split(' ')[1] // Remove Bearer from string
    if (token === 'null' || !token) return res.status(401).send('Unauthorized token request ');
    let verifiedUser = jwt.verify(token, "config.TOKEN_SECRET");   // config.TOKEN_SECRET => 'secretKey'
    // console.log("VS1 ",verifiedUser);
    if (!verifiedUser) return res.status(401).send('Unauthorized request ')
    req.user = verifiedUser; // user_id & user_type_id
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}




async function IsUser(req, res, next) {
  if (req.user.Role === "User") {
    next();
  }
  return res.status(401).send("Unauthorized!");
}
async function IsAdmin(req, res, next) {
  if (req.user.Role === "Admin") {
    next();
  } else return res.status(401).send("Unauthorized!");
}







app.use(cors())
app.use('/Arts', express.static(path.join(__dirname, 'public/ServerDisk')))
app.use('/Avatars', express.static(path.join(__dirname, 'public/Avatars')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3001

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
app.get('/Following', verifyUserToken, async (req, res) => {
  try {
    let Sub = await mysql.query(`SELECT AuthorId from Subscription where SubscriberId = ${req.user.Id}`)
    if(Sub[0][0]){
      let Res = Sub[0].map(obj => obj.AuthorId);
      const page = req.query.page
      const limit = 6 * 4
      const offset = (page - 1) * limit
      const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
      const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
      if (page > totalPage || page == 0)
        return;
      else {
        // console.log(offset)
        const [data] = await mysql.query(`SELECT * FROM artwork where AuthorId IN (${Res}) limit ? offset ?`, [+limit, +offset])
        res.json(data)
      }
    }else {
      res.send([])
    }
  } catch (error) {
    console.log(error)
  }
})

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
    const query = `INSERT INTO user (Name, Password, Email) VALUES('${req.body.name}','${hasPassword}','${req.body.email}')`;
    const [results] = await connection.query(query);
    // console.log(results);
    await connection.end(); // Close the connection after query execution
    let payload = { Name: req.body.name, Role: "User" };
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
    // console.log("Log: ",req.body);
    if (user != null) {
      const validPass = await bcrypt.compare(req.body.password, user[0][0].Password);
      if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");
      let payload = { Id: user[0][0].Id, Role: user[0][0].Role, };
      const token = jwt.sign(payload, "config.TOKEN_SECRET");
      res.status(200).header("auth-token", token).send({ "token": token, "Id": user[0][0].Id, "Name": user[0][0].Name, "Avatar": user[0][0].Avatar });
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
app.post("/AddComment",verifyUserToken, async (req, res) => {
  console.log("Req: ", req.body)
  console.log("Req: ", req.user)
  try {
    await mysql.query(`INSERT INTO Comments (ArtWorkId, CommentatorId, CommentText) VALUES(${req.body.ArtWorkId}, ${req.user.Id}, ${mysql.escape(req.body.Comment)})`)
    res.sendStatus(200);
} catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
}
});
app.post("/UnComment",verifyUserToken, async (req, res) => {
  console.log("Req: ", req.body)
  console.log("Req: ", req.user)
  try {
    await mysql.query(`DELETE FROM Comments WHERE CommentatorID=${req.user.Id} and CommentId=${req.body.CommentId}`)
    res.sendStatus(200);
} catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
}
});
app.get("/Comments", async (req, res) => {
  // console.log("Req: ", req.query)
  try {
    let [Res] = await mysql.query(`SELECT CommentId,CommentatorId,CommentText,Name,Avatar from Comments,user where ArtWorkId = ${req.query.ArtWorkId} AND user.Id=Comments.CommentatorId`)
    // const Res = Sub[0].map(obj => obj.AuthorId);
    // console.log("SUb: ", Sub[0])
    res.status(200).send(Res);
  } catch (error) {
    console.log(error)
  }
});

app.get("/Tegs", async (req, res) => {
  try {
    let Sub = await mysql.query(`SELECT TegBody from Tegs where ArtWorkId = ${req.body.ArtWorkId}`)
    const Res = Sub[0].map(obj => obj.AuthorId);
    // console.log("SUb: ", Sub[0])
    res.status(200).send(Res);
  } catch (error) {
    console.log(error)
  }
});
app.post("/AddTeg", async (req, res) => {
  console.log("Req: ", req.query)
  try {
    const TegId = await mysql.query(`SELECT Id FROM TegsBody WHERE Title=${req.query.Title}`);
    if (TegId[0][0]) {
      const Teg = await mysql.query(`SELECT * FROM Tegs WHERE Id=${TegId[0][0]['Id']} and ArtWorkId=${req.query.ArtWorkId}`);
      if (Teg[0][0]) {
        console.log("res1");
        res.status(200).send('Teg already exists');
      } else {
        console.log("res2");
        await mysql.query(`INSERT INTO Tegs (Id,ArtWorkId) VALUE (${TegId[0][0]['Id']},${req.query.ArtWorkId})`);
        res.status(200).send('Teg inserted');
      }
    } else {
      console.log("res3");
      await mysql.query(`INSERT INTO TegsBody (Title) VALUE (${req.query.Title})`);
      const TegId = await mysql.query(`SELECT Id FROM TegsBody WHERE Title=${req.query.Title}`);
      await mysql.query(`INSERT INTO Tegs (Id,ArtWorkId) VALUE (${TegId[0][0]['Id']},${req.query.ArtWorkId})`);
      res.status(200).send('Teg inserted');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});
app.post("/UnTeg", async (req, res) => {
  try {
    const TegId = await mysql.query(`SELECT Id FROM TegsBody WHERE Title=${req.query.Title}`);
    if (TegId[0][0]) {
      const Teg = await mysql.query(`SELECT * FROM Tegs WHERE Id=${TegId[0][0]['Id']} and ArtWorkId=${req.query.ArtWorkId}`);
      if (Teg[0][0]) {
        await mysql.query(`DELETE FROM Tegs WHERE Id=${TegId[0][0]['Id']} and ArtWorkId=${req.query.ArtWorkId}`);
      } else {
        await mysql.query(`INSERT INTO Tegs (Id,ArtWorkId) VALUE (${TegId[0][0]['Id']},${req.query.ArtWorkId})`);
      }
    } else {
      res.status(200).send('Teg not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/Teged", async (req, res) => {
  try {
    const Id = await mysql.query(`SELECT Id FROM TegsBody WHERE TegsBody.Title = ${req.query.Title}`)
    console.log("Id ", Id)
    if (Id[0][0]) {
      const TegedId = await mysql.query(`SELECT ArtWorkId from Tegs WHERE Tegs.Id = ${Id[0][0].Id}`)
      if (TegedId[0][0]) {
        console.log("TegedId ", TegedId[0])
        const Res = TegedId[0].map(item => item.ArtWorkId);
        const page = req.query.page
        const limit = 6 * 4
        const offset = (page - 1) * limit
        const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
        const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
        if (page > totalPage || page == 0)
          return;
        else {
          // console.log(offset)
          const [data] = await mysql.query(`SELECT * from ArtWork WHERE ArtWorkId IN (${Res}) limit ? offset ?`, [+limit, +offset])
          res.json(data)
        }
      } else {
        console.log("Undefind Arts")
        res.send([])
      }
    } else {
      console.log("Undefind Teg")
      res.send([])
    }
  } catch (error) {
    console.log(error)
  }
})
app.get("/ArtTegs", async (req, res) => {
  try {
    const TegsId=await mysql.query(`SELECT Id FROM Tegs WHERE ArtWorkId=${req.query.ArtWorkId}`)
    if(TegsId[0][0]){
      // console.log("res1: ",TegsId[0])
      let Res = TegsId[0].map(item => item.Id);
      // console.log("Res: ",Res)
      const TegsTitles=await mysql.query(`SELECT Title FROM TegsBody WHERE Id IN(${Res})`)
      // console.log("res: ",TegsTitles[0])
      Res = TegsTitles[0].map(item => item.Title);
      res.send(Res)
    }else {
      console.log("Dosnt have Tegs")
      res.send([])
    }
  } catch (error) {
    console.log(error)
  }
})

app.post("/Subscription", verifyUserToken, async (req, res) => {
  try {
    // console.log("Req Subscription: ", req.user.Id, "  ", req.query.AuthorId )
    await mysql.query(`INSERT INTO Subscription (SubscriberId,AuthorId) VALUE (${req.user.Id},${req.query.AuthorId})`)
    res.status(200).send("sucsess Subscription!");
  } catch (error) {
    console.log(error)
  }
});
app.post("/UnSubscription", verifyUserToken, async (req, res) => {
  try {
    // console.log("Req Subscription: ", req.user.Id, "  ", req.query.AuthorId )
    await mysql.query(`delete from Subscription where SubscriberId=${req.user.Id} and AuthorId =${req.query.AuthorId}`)
    res.status(200).send("sucsess UnSubscription!");
  } catch (error) {
    console.log(error)
  }
});
app.post("/Subscribed", async (req, res) => {
  try {
    // console.log("Req: ", req.user )
    let Sub = await mysql.query(`SELECT AuthorId from Subscription where SubscriberId = ${req.body.SubscriberId}`)
    const Res = Sub[0].map(obj => obj.AuthorId);
    // console.log("SUb: ", Sub[0])
    res.status(200).send(Res);
  } catch (error) {
    console.log(error)
  }
});
app.post("/SubscribedArts", async (req, res) => {
  try {
    // console.log("Req: ", req.user )
    let Sub = await mysql.query(`SELECT AuthorId from Subscription where SubscriberId = ${req.body.SubscriberId}`)
    let Res = Sub[0].map(obj => obj.AuthorId);
    let Arts = await mysql.query(`SELECT * from artwork where AuthorId IN (${Res})`)
    // console.log("Arts: ", Arts)
    Res = Arts[0];
    res.status(200).send(Res);
  } catch (error) {
    console.log(error)
  }
});



app.get('/isSub', verifyUserToken, async (req, res) => {
  try {
    // console.log("req isSub: ", SubscriberId," ", AuthorId)
    const sql = `SELECT * FROM subscription where subscription.AuthorId =${req.query.AuthorId}  and SubscriberId=${req.user.Id}`
    // const sql =`SELECT * FROM artwork where ArtWorkId=${Id}`
    const [data] = await mysql.query(sql)
    // console.log("isSub: ", data)
    if (data.length > 0) {
      res.json({ isSub: true });
    } else {
      res.json({ isSub: false });
    }
  } catch (error) {
    console.log(error)
  }
})
app.get("/isLiked", verifyUserToken, async (req, res) => {
  try {
    const ArtWorkId = req.query.ArtWorkId;
    const UserId = req.user.Id;
    let data = await mysql.query(`SELECT * FROM Views where Views.ArtWorkId =${ArtWorkId}  and ViewerId=${UserId}`)
    if (!data[0].length > 0) {
      await mysql.query(`INSERT INTO Views (ViewerId,ArtWorkId) VALUE (${UserId},${ArtWorkId})`)
    }
    data = await mysql.query(`SELECT * FROM Likes where Likes.ArtWorkId =${ArtWorkId}  and LikerId=${UserId}`)
    let isLiked = true;
    // console.log("isLiked: ", data[0])
    if (!data[0].length > 0) {
      isLiked = false;
    }
    const result = {
      isLiked: isLiked
    };

    res.json(result);
  } catch (error) {
    console.log(error)
  }
});
app.get('/CountInfo', async (req, res) => {
  try {
    let Views = await mysql.query(`SELECT count(*) FROM Views where ArtWorkId =${req.query.ArtWorkId}`)
    let Likes = await mysql.query(`SELECT count(*) FROM Likes where ArtWorkId =${req.query.ArtWorkId}`)
    let Comments = await mysql.query(`SELECT count(*) FROM Comments where ArtWorkId =${req.query.ArtWorkId}`)
    // console.log("Data: ", data[0][0]['count(*)']);
    res.json({ "Views": Views[0][0]['count(*)'], "Likes": Likes[0][0]['count(*)'], "Comments": Comments[0][0]['count(*)'] });
  } catch (error) {
    console.log(error)
  }
})
app.post("/AddLike", verifyUserToken, async (req, res) => {
  try {
    // console.log("Req Subscription: ", req.user.Id, "  ", req.query.AuthorId )
    await mysql.query(`INSERT INTO Likes (LikerId,ArtWorkId) VALUE (${req.user.Id},${req.query.ArtWorkId})`)
    res.json({ "isLiked": true });
  } catch (error) {
    console.log(error)
  }
});
app.post("/UnLike", verifyUserToken, async (req, res) => {
  try {
    // console.log("Req Subscription: ", req.user.Id, "  ", req.query.AuthorId )
    await mysql.query(`delete from Likes where LikerId=${req.user.Id} and ArtWorkId =${req.query.ArtWorkId}`)
    res.json({ "isLiked": false });
  } catch (error) {
    console.log(error)
  }
});

app.get('/Profile', async (req, res) => {
  try {
    // console.log(req.query)
    const Id = req.query.Id
    // const ID = req.query.page
    const Artist = await mysql.query(`SELECT Name,Avatar,Information_about_yourself from user where Id=${Id}`)
    // console.log("Artist ", Artist[0][0]);
    res.json(Artist[0][0])
  }
  catch (error) {
    console.log(error)
  }
})
app.get('/CreatedBy', async (req, res) => {
  try {
    // console.log(req.query)
    const page = req.query.page
    const AuthorId = req.query.AuthorId
    const limit = 6 * 4
    const offset = (page - 1) * limit
    const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
    const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
    if (page > totalPage || page == 0)
      return;
    else {
      // console.log(offset)
      const [data] = await mysql.query(`SELECT * FROM artwork where AuthorId=${AuthorId} limit ? offset ?`, [+limit, +offset])
      res.json(data)
    }
  } catch (error) {
    console.log(error)
  }
})
app.get('/LikedBy', async (req, res) => {
  try {
    // console.log(req.query)
    const page = req.query.page
    const AuthorId = req.query.AuthorId
    const limit = 6 * 4
    const offset = (page - 1) * limit
    let Likes = await mysql.query(`SELECT ArtWorkId from Likes where LikerId = ${AuthorId}`)
    let Res = Likes[0].map(obj => obj.ArtWorkId);
    const [totalPageData] = await mysql.query("SELECT count(*) as count from artwork")
    const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
    if (page > totalPage || page == 0)
      return;
    else {
      // console.log("Res ",Res);
      if (Res[0]) {
        const [data] = await mysql.query(`SELECT * FROM artwork where ArtWorkId IN (${Res}) limit ? offset ?`, [+limit, +offset])
        res.json(data)
      } else res.json([])
    }
  } catch (error) {
    console.log(error)
  }
})
app.get('/Art', async (req, res) => {
  try {
    // console.log("art: ", req.query)
    const Id = req.query.Id
    const sql = `SELECT artwork.ArtWorkId, artwork.Title, artwork.Description, artwork.AuthorId, artwork.FileName, artwork.Date_of_creation, user.Id, user.Name, user.Avatar  FROM artwork, user where artwork.AuthorId = user.Id and ArtWorkId=${Id}`
    const [data] = await mysql.query(sql)

    const result = {
      ...data[0]
    };

    res.json(result);
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log("Start server");
})
