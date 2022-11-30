var config = require('../db/connect');
const sql = require('mssql');


async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select *  from Application.Cities");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getOrders: getOrders
}