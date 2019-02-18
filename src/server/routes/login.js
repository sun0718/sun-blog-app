var express = require("express")
var router = express.Router();

var Users = require('../models/users')


router.get('/',(req,res,next)=>{
    res.json({name:'sunjilong',pws:'123'})
})

router.post('/register',(req,res,next)=>{
    res.send(req.body.email);
    Users.findOne({email:req.body.email})
         .then((user)=>{
            if(user){
                return res.status(400).json({email:"邮箱已注册！"})
            }else{
                const newUser = new Users({
                    name:req.body.email,
                    email:req.body.email,
                    avaitor:req.body.avaitor,
                    password:req.body.password
                });
            }
         })
})

module.exports = router;