var mongoose=require("mongoose");
const Leaveview=require('./schema');

module.exports.userview=async function (uuid){
    try{
        let i;
       
        var view=Leaveview.findOne({uuid:uuid});
        return view;
}catch(error)
{
    console.log(error);
}
}
module.exports.adminview=async function (){
    try{
       var aview=Leaveview.find();
        return aview;
}catch(error)
{
    console.log(error);
}}


