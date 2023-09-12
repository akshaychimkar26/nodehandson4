const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const app=express()

const route = require('./Routes/route')
dotenv.config()

app.use(cors({
    origin:'*'
}))

app.use(express.json())

app.use('/user',route)
const port = process.env.PORT || 2300

app.listen(port,()=>{
    console.log(`${port} running fine`);
})