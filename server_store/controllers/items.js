const items= require("../models/items")

const getItemsbyId = async (req,res)=>{
    let data;
    try{
        data = await items.getItemsbyId(req.params.id_item);
        res.status(200).json({items:data, status:200})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const getItemsbyName = async (req,res)=>{
    let data;
    try{
        data = await items.getItemsbyName(req.params.item_name);
        res.status(200).json({items:data, status:200})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const getItemsbyCategory = async (req,res)=>{
    let data;
    try{
        data = await items.getItemsbyCategory(req.params.category);
        res.status(200).json({items:data, status:200})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const getItemsbySupplier = async (req,res)=>{
    let data;
    try{
        data = await items.getItemsbySupplier(req.params.id_supplier);
        res.status(200).json({items:data, status:200})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const getItems={
    getItemsbyId,
    getItemsbyName,
    getItemsbyCategory,
    getItemsbySupplier
}

module.exports = getItems;