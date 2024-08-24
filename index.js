const express = require('express');
const  port=process.env.PORT || 3000;
const cnn=require("./db/db");
const ProductData=require("./sechma/model")
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/Allproducts',async(req,res)=>{
    
    const data=await ProductData.find({});
    res.status(200).json(data); 

});

app.post('/products',async(req,res)=>{
    try{
        const {name,description,thumnail,price,image1,image2,image3,image4,color}=req.body;
        const product=await ProductData({name,description,thumnail,price,image1,image2,image3,image4,color});
        product.save().then(()=>{
            res.send(product);
        });
    }catch(e){
        res.status(400).send(e.message);
    }

})

const start=async()=>{
    try {
        await cnn();
        app.listen(port,()=>{
            console.log(`server running at ${port}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();