const suppliers= require("../models/suppliers")

const getSuppliers = async (req,res)=>{
    let data;
    try{
        data = await suppliers(req.params.id_supplier);
        res.status(200).json({suppliers:data, status:200})
    }catch(err){
        res.status(400).json({"error":err})
    }
};


module.exports = getSuppliers;