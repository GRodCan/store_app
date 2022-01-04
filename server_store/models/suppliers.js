const pool = require('../utils/sql_connect');

const getSuppliers = async(id_supplier) => {
    let client;
    let result;
    try{
        if(id_supplier!=undefined){
            client = await pool.connect();
            const data = await client.query(`SELECT * FROM suppliers WHERE id_supplier=$1`, [parseInt(id_supplier)])
            result = await data.rows}
        else{
            client = await pool.connect();
            const data = await client.query(`SELECT * FROM suppliers`)
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

module.exports=getSuppliers