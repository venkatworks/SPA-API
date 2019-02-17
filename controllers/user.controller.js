var users = require('../models/user.model');

var userModule = (function () {
    return {

        getUsers:function(req,res,next){
            users.find(function(err,users){
                users.filter((user)=>{
                    console.log("username...req.",req.params["userName"]);
                    console.log("username...db.",user.username);
                    if(user.username && user.password){
                        if(user.username == req.params["userName"] && user.password == req.params["password"]){
                            res.status(200).end();
                        }else{
                            res.status(401).end();
                        }
                    }
                })
                               
            })
        },

        saveUser : function(req,res,next){
            var postBody = JSON.parse(JSON.stringify(req.body));                        
            var obj = JSON.parse(Object.keys(postBody)[0]);            
            var user = new users({
                username:obj.userName,
                password:obj.password,
                email:obj.email,
                firstname:obj.firstName,
                lastname:obj.lastName,
                gender:obj.gender,
                country:obj.country
            });

            user.save((error)=>{
                if(error){
                    console.log(error);
                }else{
                    res.status(200).end();
                }
            })          
        }
    };
  })();

module.exports = userModule;