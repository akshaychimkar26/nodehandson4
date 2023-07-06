const express=require("express")
const app=express();
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json())
const userroutes=require('./Routes/route')
const auth=require('./middleware/auth')
const CookieParser = require('cookieparser');
const cors=require('cors')
app.use(cors({
    origin:'*'
}))
app.use('/user',userroutes)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`running on ${port}`);
});
app.use(CookieParser)
