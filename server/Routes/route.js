const {register,login,aboutus,contactus} = require("../controller/user");
const userRoute = require("express").Router();
const {AllRoutes,specificRoutes}=require('../middleware/auth');

// userRoute.use(AllRoutes);

userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/aboutus',aboutus)
userRoute.get('/contactus',contactus)

module.exports = userRoute;