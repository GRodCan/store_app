const pool = require('../utils/sql_connect');

const getItemsbyId = async(id_item) => {
    let client;
    let result;
    try{
        if(id_item!=undefined){
            client = await pool.connect();
            const data = await client.query(`SELECT * FROM items WHERE id_item=$1`, [parseInt(id_item)])
            result = await data.rows}
        else{
            client = await pool.connect();
            const data = await client.query(`SELECT * FROM items`)
            result = await data.rows    
        }
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}
const getItemsbyName = async(name) => {
    let client;
    let result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM items WHERE item_name=$1`, [name])
        result = await data.rows    
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}

const getItemsbyCategory = async(category) => {
    let client;
    let result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM items WHERE category=$1`, [category])
        result = await data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}

const getItemsbySupplier = async(id_supplier) => {
    let client;
    let result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM items WHERE id_supplier=$1`, [id_supplier])
        result = await data.rows        
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}



const getItems={
    getItemsbyId,
    getItemsbyName,
    getItemsbyCategory,
    getItemsbySupplier
}
module.exports=getItems