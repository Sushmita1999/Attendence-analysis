const express=require('express');
const router=express.Router();
const viewuserleave=require('../Models/viewuserleavemodel');
router.get("/viewuser", async (req,res) => {
    try{
        console.log(req.body);
        let i=0,j=0;
        var o={};
        var key1='total days';
        var key2='present';
        let  uuid =req.body.uuid;
        let viewleave=await viewuserleave.userview(uuid);
        let dates=viewleave.dates;
        dates.forEach(element => {
            if(element.hrs!=0)
            {
                i=i+1;
            }
            j=j+1;

        });
        o[key1]=j;
        o[key2]=i;
        res.json(o);
        
    }catch(error){
        console.log(error);
    }
})
module.exports=router;

