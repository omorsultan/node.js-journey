const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com"
  }
];
const pool = require("../database/db");

exports.getUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users;");
      console.log(rows);
    return rows;
};

exports.getUserById = (id) =>{
  return users.find(user => user.id == id);
};

exports.createUser = (data) => {

    const user = {
        id: users.length + 1,
        ...data
    };

    users.push(user);

    return user;

};