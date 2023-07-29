const express =  require('express');
const app = express();
const mongoose = require ('mongoose');
require('dotenv').config();
const port = process.env.SERVER_PORT

app.use(express.json())
app.use('/api', require('./api/users/Router'))
app.use ('/api',require('./api/products/Router'))

mongoose.connect(process.env.mongo_url)
.then(()=>console.log("connected"))
.catch((err)=>console.log("something went wrong"))


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})