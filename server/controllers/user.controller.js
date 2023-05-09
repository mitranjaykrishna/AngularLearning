const express=require('express');

const router=express.Router();
const user=require('../Models/user.model');

router.get('/',(req,res)=>{
    user.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send(err);
    })

}).post('/',(req,res)=>{
    const newData=req.body;
    // res.send(newData);
    user.create(newData)
    .then((data)=>{
        res.status(201).send(data);
    })
    .catch(err=>{
        res.status(500).send(err);
    })

});


module.exports=router;