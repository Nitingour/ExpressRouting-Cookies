const express=require('express');
var router=express.Router();

router.get('/hello',(request,response)=>{
response.render('hello');
});




module.exports=router;
