const pool = require("../database/db");

exports.getProducts = async () => {

    const rows = await pool.query(
        "SELECT * FROM products"
    );
    console.log(rows[0]);

    return rows[0];
};