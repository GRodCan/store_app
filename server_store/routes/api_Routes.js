const routes= require('express').Router();



routes.get('/products', (req,res)=>console.log("hola"));


module.exports = routes;