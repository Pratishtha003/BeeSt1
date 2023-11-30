const router = require("express").Router();
const productModel = require("../models/product");

router.post("/add", async (req,res)=>{
    try{
        const data = req.body;
        const newProduct = new productModel(data);
        await newProduct.save().then(()=>{
            res.status(200).json({message:"Product Added Successfully"});
        });
    }catch(error){
        console.log(error);
    }
})

router.get("/getProducts", async(req,res)=>{
    var books;
    try{
        books = await productModel.find();
        res.status(200).json({ books });
    }catch(error){
        console.log(error);
    }
})

router.get("/getProducts/:id", async(req,res)=>{
    let book;
    const id = req.params.id;
    try{
        book = await productModel.findById(id);
        res.status(200).json({book});
    }catch(error){
        console.log(error);
    }
});


router.put("/updateProducts/:id", async(req,res)=>{
    const id = req.params.id;
    let book;
    const {name, des,price,cat}=req.body;
    try{
        book = await productModel.findByIdAndUpdate(id,{name, des,price,cat});
        await book.save().then(()=>res.json({message:"Updated"}));
    }catch(error){
        console.log(error);
    }
})



module.exports = router;