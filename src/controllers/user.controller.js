const userService = require('../services/user.service');

exports.getUsers = async (req, res) => {
    try {
        const { role } = req.query;

        const users = role
            ? await userService.getUsersByRole(role)
            : await userService.getUsers();

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getUserById = async(req, res) =>{
  const user = await userService.getUserById(req.params.id);

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
exports.getUsersByRole = async (req, res) => {
    try {
        const users = await userService.getUsersByRole(req.params.role);

        res.json({
            success: true,
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};