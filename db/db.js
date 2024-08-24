const mongoose= require("mongoose")
URI="mongodb+srv://hanzira45:6K4DyE493oXsE0sK@cluster0.16dez.mongodb.net/fakestore?retryWrites=true&w=majority&appName=Cluster0"
const connectDB=()=>{
    return mongoose.connect(URI);
}

module.exports=connectDB;