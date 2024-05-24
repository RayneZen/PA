const express = require('express');
const cors = require('cors');
const path =require('path');
const http=require('http')
const url=require('url')
const mysql=require('./Database')
const app =express()

app.use(cors())
app.use('/Arts',express.static(path.join(__dirname,'public/ServerDisk')))
app.use('/Avatars',express.static(path.join(__dirname,'public/Avatars')))


const PORT=process.env.PORT || 3001



app.get('/', async (req,res) => {
    try{
        // console.log(req.query)
        const page =req.query.page
        const limit=6*4
        const offset =(page-1)*limit
        const [totalPageData]= await mysql.query("SELECT count(*) as count from artwork")
        const totalPage = Math.ceil(+totalPageData[0]?.count /limit)
        if(page>totalPage|| page==0)
            return;
        else {
            // console.log(offset)
            const [data]= await mysql.query('SELECT * FROM artwork limit ? offset ?',[+limit, +offset])
            res.json(data)
        }
    }catch (error) {
        console.log(error)
    }
})


// app.get('/2',(req,res)=>{
//     // const sql ="SELECT * FROM art ORDER BY title"
//     const sql ="SELECT * FROM artwork ORDER BY title"
//     mysql.query(sql,(err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })
app.get('/Art', async (req,res) => {
    try{
        // console.log("art: ", req.query)
        const Id = req.query.Id
        const sql =`SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${Id}`
        // const sql =`SELECT * FROM artwork where ArtWorkId=${Id}`
        const [data]= await mysql.query(sql)    
        res.json(data)
    }catch (error) {
        console.log(error)
    }
})

app.get('/Art/:id', async (req,res) => {
    try{
        const Id = req.params.id
        const sql =`SELECT * FROM artwork, user where artwork.AuthorId = user.UserId and ArtWorkId=${Id}`
        // const sql =`SELECT * FROM artwork where ArtWorkId=${Id}`
        const [data] = await mysql.query(sql)    
        res.json(data)
    }catch (error) {
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



app.listen(PORT,()=>{
    console.log("Start server");
})