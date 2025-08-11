
const Product = require("../models/bookSchema")

module.exports.home = (req,res)=>{
    res.render('index')
}

module.exports.addBook = async (req,res)=>{
    try{
        await Product.create(req.body)
        res.redirect(req.get('Referrer') || '/')
    }
    catch(err){
        console.log(err)
        res.redirect(req.get('Referrer') || '/')
    }
}

module.exports.addBookPage =async (req,res)=>{
    return res.render('pages/addBookPage')
}

module.exports.viewProductPage =async (req,res)=>{
    try {
        let product = await Product.find({})
        return res.render('pages/viewProductPage',{product})
    } catch (error) {
        console.log(error)
        return res.render('pages/viewProductPage',{product : []})
    }
}

module.exports.deleteBook = async (req,res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id);
        res.redirect(req.get("Referrer" || "/"))
    } catch (error) {
        console.log(error)
        res.redirect(req.get("Referrer" || "/"))
    }
}

module.exports.editBook = async (req,res)=>{
    try {
        let {id} = req.params;
        let product = await Product.findById(id)
        res.render('pages/editProductPage',{product})
    } catch (error) {
        console.log(error)
        res.render('pages/editProductPage',{product : []})
    }
}
module.exports.updateBook = async (req, res) => {
    try {
        let { id } = req.params;
        await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.redirect('/viewProductPage');
    } catch (error) {
        console.log(error);
        res.redirect('/viewProductPage');
    }
};
