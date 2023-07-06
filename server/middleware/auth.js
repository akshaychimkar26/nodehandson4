const jwt=require("jsonwebtoken")
const secretkey=process.env.SECRETKEY
const jsontoken=(items,statuscode,res)=>{
    const user=items.email
    const token=jwt.sign({useremail:items.email},secretkey,{expiresIn:3600})
    const options={
        expires:new Date(
            Date.now()+5*24*60*60
        )
    }
    res.status(statuscode).cookie('token',token,options).json({
        user,
        token
    })
}
module.exports=jsontoken