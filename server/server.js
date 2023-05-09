const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const apiRoutes=require('./routes/api.routes');
const app=express();
const port =process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/learningPostGet',{useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
    console.log('Connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes);



app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})