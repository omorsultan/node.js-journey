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

exports.getUsers = () => {
  return users;
};

exports.getUserById = (id) =>{
  return users.find(user => user.id === id);
};