const router = require("express").Router();
const review = require("../models/review")

router.post("/add/riv", async (req,res)=>{
    try{
        const data = req.body;
        const newProduct = new review(data);
        await newProduct.save().then(()=>{
            res.status(200).json({message:"Book Added Successfully"});
        });
    }catch(error){
        console.log(error);
    }
})

router.get("/getriv", async(req,res)=>{
    var books;
    try{
        books = await review.find();
        res.status(200).json({ books });
    }catch(error){
        console.log(error);
    }
})

router.get("/getriv/:id", async(req,res)=>{
    let book;
    const id = req.params.id;
    try{
        book = await review.findById(id);
        res.status(200).json({book});
    }catch(error){
        console.log(error);
    }
});


router.put("/updateriv/:id", async(req,res)=>{
    const id = req.params.id;
    let book;
    const {content, rating,author,createdAt}=req.body;
    try{
        book = await review.findByIdAndUpdate(id,{content, rating,author,createdAt});
        await book.save().then(()=>res.json({message:"Updated"}));
    }catch(error){
        console.log(error);
    }
})


router.delete("/deleteriv/:id",async (req,res)=>{
    const id = req.params.id;
    try{
        await review.findByIdAndDelete(id).then(()=>res.json({message:"DELETED"}));
    }catch(error){
        console.log(error);
    }
})

module.exports = router;