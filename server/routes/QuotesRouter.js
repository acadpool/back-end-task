const express=require('express');
const router=express.Router();

const Quotes=require('../models/Quotes');

router.route('/getAll').get(function(req,res){
    Quotes.find(function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(data);
        }
    });
});

router.route('/getById/:id').get(function(req,res){
    console.log('api hit');
    const id=req.params.id;
    Quotes.findById(id,function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(data);
        }
    });
});

router.route('/add').post(function(req,res){
    const quote=new Quotes(req.body);
    quote.save()
    .then(()=>{
        console.log('quote added successfully')
        res.json({msg:'Added successfully'})
    })
    .catch((err)=>{
        console.log('error quote not saved')
        res.json({msg:'Error'})
    })
});

router.route('/deleteById/:id').get(function(req,res){
    Quotes.findByIdAndRemove({_id:req.params.id},function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log('Successfully Removed');
        }
    });
});

router.route('/search').post(function(req,res){
    Quotes.find({$text:{$search:req.body.query}},function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(data);
        }
    })
})

module.exports=router;