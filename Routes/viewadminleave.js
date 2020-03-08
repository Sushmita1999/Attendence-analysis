const express=require('express');
const router=express.Router();
const viewuserleave=require('../Models/viewuserleavemodel');
router.get("/viewadmin", async (req,res) => {
    try{
        console.log(req.body);
        let viewallleave=await viewuserleave.adminview();
        let i=0,j=0,k=0;
        let info=[];
        viewallleave.forEach(element =>
            {
                let dates=element.dates;
                //o[key3]=element.uuid;
                dates.forEach(ele => {
                    if(ele.hrs!=0)
                    {
                      j=j+1;
                    }
                    k=k+1;
                    
        
                })
                info.push({
                    uuid:element.uuid,
                    totaldays:k,
                    present:j
                });
                k=0;
                j=0;
                

            } )
            res.json(info);
        
            
        
    }catch(error){
        console.log(error);
    }
})
module.exports=router;