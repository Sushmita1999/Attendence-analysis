const express= require("express");
const path=require("path");
const app=express();
const viewuserleave=require('./Routes/viewuserleave');
const viewadminleave=require('./Routes/viewadminleave');


app.use(express.json());
app.use(express.urlencoded({
    extended:'true'
}));
app.use("/",viewuserleave);
app.use("/",viewadminleave);



app.listen();
