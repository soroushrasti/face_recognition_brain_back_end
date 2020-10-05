const express = require('express');
const bycrpt=require('bcrypt-nodejs');
const cors= require('cors');
const knex=require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const cors=require('cors')
const db= knex({
    client:'pg',
    connection:process.env.DATABASE_URL,
    ssl:true
});

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('it is working')
})

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bycrpt)})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bycrpt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db)})
app.put('/image',(req,res)=>{image.handleImage(req,res)})
app.post('/imageurl', (req,res)=>{image.handleApicall(req,res)})
app.listen(process.env.PORT || 3000,()=>{
console.log('app is running')})