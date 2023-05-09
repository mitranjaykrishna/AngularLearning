const mongoose=require('mongoose');

const mongoDB_URL=process.env.MongoDB_Url;

mongoose.connect(mongoDB_URL);
mongoose.connection.on('connect',()=>{
    console.log('Connected');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);

})

