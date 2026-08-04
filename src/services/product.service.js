const pool = require("../database/db");

exports.getProducts = async ({ stock, sortBy, order, limit }) => {

    let sql = "SELECT id, name, price, stock FROM products";
    const values = [];

    // WHERE
    if (stock) {
        sql += " WHERE stock > ?";
        values.push(Number(stock));
    }

    // ORDER BY
    const allowedColumns = ["id", "name", "price", "stock"];
    const column = allowedColumns.includes(sortBy) ? sortBy : "id";
    const direction = order === "DESC" ? "DESC" : "ASC";

    sql += ` ORDER BY ${column} ${direction}`;

    // LIMIT
    if (limit) {
        sql += " LIMIT ?";
        values.push(Number(limit));
    }

    const [rows] = await pool.query(sql, values);

    return rows;
};