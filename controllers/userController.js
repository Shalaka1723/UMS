const User = require('../models/userModel');

const loadRegister = async(req,res)=>{
    try{
        res.render('registration');

    }catch(error){
        console.log(error.message)
    };
}

const insertUser = async(req,res)=>{
    try{

    }catch(error){
        console.log(error.message);
    }
}

module.exports = {
    loadRegister
}