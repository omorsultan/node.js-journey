const userService = require('../services/user.service');

exports.getUsers = (req, res) =>{
  const users = userService.getUsers();

  res.status(200).json({
    success   : true,
    message   : "Users fetched successfully",
    data      : users
  });
};

exports.getUserById = (req, res) =>{
  const user = userService.getUserById(req.params.id);

  res.json({
    success   : true,
    message   : "User fetched successfully",
    data      : user
  });
};