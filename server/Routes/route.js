const {register,login,logout,fetchsingledata}=require('../controller/user')
const userroutes=require('express').Router()
userroutes.post('/register',register)
userroutes.post('/login',login)
userroutes.post('/logout',logout)
userroutes.get('/singledata/:id',fetchsingledata)

module.exports=userroutes