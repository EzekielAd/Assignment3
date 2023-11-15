var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Show = require('../models/Bio_show');

module.exports.DislayShowlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const ShowList = await Show.find(); //< Use of await keyword
       res.render('show/list', {
          title: 'Show List', 
          ShowList: ShowList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('show/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddShow = async (req,res,next)=>{
    try{
        res.render('show/add',
        {
            title:'Add show'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('show/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessShow = async (req,res,next)=>{
    try{
        let newShow = Show({
            "title":req.body.title,
            "genre": req.body.genre,
            "rating": req.body.rating
        });
        Show.create(newShow).then(() =>{
            res.redirect('/showslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('show/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditShow = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const ShowToEdit = await Show.findById(id);
    res.render('show/edit',
    {
        title:'Edit title',
        Show:showToEdit
    })
}
catch(error){
    console.error(err);
    res.render('show/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditShow = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedShow = Show({
            "_id":id,
            "title":req.body.title,
            "genre": req.body.genre,
            "rating": req.body.rating
        });
        Show.findByIdAndUpdate(id,updatedShow).then(()=>{
            res.redirect('/showslist')
        });
    }
    catch(error){
        console.error(err);
        res.render('show/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteShow = (req,res,next)=>{
    try{
        let id = req.params.id;
        Show.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/showslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('show/list',
        {
            error: 'Error on the server'
        });
    }
}