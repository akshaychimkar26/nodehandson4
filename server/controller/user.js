const bcrypt=require('bcrypt')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')
dotenv.config()
const saltround=process.env.saltround
const SALTROUND_NEW=parseFloat(saltround)
const secretkey=process.env.secretkey
console.log(typeof(saltround));
let storedata=[]
console.log(secretkey);

const register=(async(req,res)=>{
    const data=req.body
    const user=storedata.find((items)=>{
        if(items.email===data.email){
            return items
        }
    })   
    if(user){
        res.send({
            msg:'user already exists'
        })
    } else{
        const salt=bcrypt.genSaltSync(SALTROUND_NEW)
        console.log(salt);
        const hashpassword=bcrypt.hashSync(data.password,salt)
        console.log(hashpassword);
        const tempobj={
            name:data.name,
            email:data.email,
            password:data.password,
            contactnumber:data.contactnumber
        }
        storedata.push(tempobj)
        res.send(storedata)
    }   
})

const login=(req,res)=>{
    const data=req.body
    const user=storedata.find((items)=>{
        if(items.email===data.email){
            const validate=bcrypt.compareSync(data.password,user.password)
                const token=jwt.sign({useremail:items.email},secretkey,{expiresIn:3600})
                if(validate){
                res.send({
                    email:user.email,
                    password:user.password,
                    token:token
                })
                jsontoken(items,200,res)
            }else{
                res.send('user is invalid')
            }
        }else{
            res.send('user is not registered')
        }
    })
}
const logout=(req,res)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now)
    })
    res.status(200).json({
        msg:'user is logout'
    })
}

const fetchsingledata=(req,res)=>{
    const id=req.params.id
    const fetchdata=data.find((items)=>{
        if(items.id===id){
            res.send(items)
        }
    })
}

module.exports={register,login,logout,fetchsingledata}
