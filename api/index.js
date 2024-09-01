import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://saquibe143:saquib%40143@cluster0.9t5hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{

}).then(()=>{
    console.log("Database connected")
}).catch((error)=>{
console.log("OOps!@Something went wrong", error);

})

const app  = express();

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})