const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');


//environment variable or constants
env.config();


//mongodb connection new
//mongodb+srv://root:<password>@cluster0.hfjhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



//mongodb+srv://root:<password>@cluster0.7oe1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.hfjhb.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex : true
    }
).then(()=>{
    console.log("Database connected");
});
app.use(bodyParser());

app.use('/api',userRoutes); 
 
// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"Hello from server"
//     });
// });

// app.post('/data',(req,res,next)=>{
//     res.status(200).json({
//         message:req.body
//     });
// });


app.listen(process.env.PORT,()=>
{
    console.log(`Server is running on port ${process.env.PORT}`);
});