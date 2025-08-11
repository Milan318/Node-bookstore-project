
const { Router } = require("express");
const { home, viewProductPage, deleteBook, editBook, addBook, updateBook, addBookPage } = require("../controllers/book.controller");

const bookRoute = Router();


bookRoute.get('/',home)
bookRoute.get('/addBookPage',addBookPage)
bookRoute.get('/viewProductPage',viewProductPage)
bookRoute.get('/delete/:id',deleteBook)
bookRoute.get('/edit/:id',editBook)
bookRoute.post('/create',addBook)
bookRoute.post('/update/:id', updateBook); 



module.exports = bookRoute
