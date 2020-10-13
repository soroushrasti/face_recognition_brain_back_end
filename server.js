const express = require('express');
const bycrpt=require('bcrypt-nodejs');
const knex=require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const cors=require('cors');

const db= knex({   client:'pg',connection:process.env.DATABASE_URL, ssl:true });
//const db= knex({   client:'pg',connection:{
//    host:'127.0.0.1',database:'smart-brain'
//}});

const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('server back-end is working')
})

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bycrpt)})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bycrpt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db)})
app.put('/image',(req,res)=>{image.handleImage(req,res,db)})
app.post('/imageurl', (req,res)=>{image.handleApicall(req,res)})
app.listen(process.env.PORT || 3000,()=>{
console.log('server is running')})