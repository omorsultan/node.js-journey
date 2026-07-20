const userService = require('../services/user.service');

exports.getUsers = (req, res) => {

    try {

        const users = userService.getUsers();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

exports.getUserById = (req, res) =>{
  const user = userService.getUserById(req.params.id);

  res.json({
    success   : true,
    message   : "User fetched successfully",
    data      : user
  });
};
exports.createUser = (req, res) => {

    const user = userService.createUser(req.body);

    res.status(201).json({
        success: true,
        data: user
    });

};