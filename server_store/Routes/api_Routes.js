const routes= require('express').Router();
const suppliers= require('../controllers/suppliers')
const items= require('../controllers/items')


//http://localhost:5000/api/suppliers
//http://localhost:5000/api/suppliers/3
routes.get('/suppliers/:id_supplier?', suppliers);

// http://localhost:5000/api/items
// http://localhost:5000/api/items/20
routes.get('/items/:id_item?', items.getItemsbyId);

// http://localhost:5000/api/items/name/Arpa-kazooie
routes.get('/items/name/:item_name', items.getItemsbyName);

// http://localhost:5000/api/items/category/videogame
routes.get('/items/category/:category', items.getItemsbyCategory);

// http://localhost:5000/api/items/supplier/1
routes.get('/items/supplier/:id_supplier', items.getItemsbySupplier);


module.exports = routes;