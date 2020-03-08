const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://varsha:dattebayo@cluster0-xw5t9.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
module.exports=mongoose;
