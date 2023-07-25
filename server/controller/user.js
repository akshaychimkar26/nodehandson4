const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const jsontoken = require('../middleware/auth');
const secretkey="authorization_API";

let storedata=[]
const register = (req,res)=>{
    const data=req.body;
    const user=storedata.find((items)=>{
        if(items.email===data.email){
            return items;
        }
    })

    if(user){
        res.send({msg:"ALREADY A USER ACCOUNT EXISTS"})
    }
    else{
        const salt=bcrypt.genSaltSync(10)
        const hashpw=bcrypt.hashSync(data.password,salt);
        console.log({hashpw});

        const tempobj={
            name:data.name,
            email:data.email,
            pw:hashpw
        }
        storedata.push(tempobj);
        const token=jwt.sign({user:"items.email"},secretkey);
        res.send({
            msg:"USER REGISTERED SUCCESFULLY WITH TOKEN",
            token:token
        })
    }
}

const login=(req,res)=>{
    const data=req.body;
    storedata.find((items)=>{
        if(items.email===data.email){
            const valid=bcrypt.compareSync(data.password,items.pw)
            if(valid){
                const token=jwt.sign({user:"items.email"},secretkey);
                res.send({
                    msg:"USER LOGGED IN",
                    token:token
                });
            }
            else{
                res.send("USER PASSWORD IS WRONG!!!! PLEASE TRY AGAIN");
                return;
            }
        }
    })
    res.send({
        msg:"USER IS NOT REGISTERED"
    });
}

const aboutus=(req,res)=>{
    res.send({
        msg:"Abouts us"
    })
    console.log("About Api")
}

const contactus=(req,res)=>{
    res.send({
        msg:"contact us"
    })
    console.log("contactus Api")
}

module.exports ={register,login,aboutus,contactus}
