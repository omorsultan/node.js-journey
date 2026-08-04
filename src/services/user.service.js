
const pool = require("../database/db");




exports.getUsers = async () => {
    const rows= await pool.query("SELECT * FROM users;");
      console.log(rows[0]);
    return rows[0];
};
exports.getUserById = async (id) => {

    const rows = await pool.query(
        "SELECT * FROM users WHERE id = ?",
        [id]
    );
console.log(rows[0]);
    return rows[0];
};
exports.getUsersByRole = async (role) => {
    const rows = await pool.query(
        "SELECT * FROM users WHERE role = ?",
        [role]
    );

    return rows[0];
};
exports.createUser = (data) => {

    const user = {
        id: users.length + 1,
        ...data
    };

    users.push(user);

    return user;

};