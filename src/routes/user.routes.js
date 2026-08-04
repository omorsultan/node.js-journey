const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller'); 


router.get("/", userController.getUsers);
router.get("/role/:role", userController.getUsersByRole);
router.post("/",userController.createUser);

module.exports = router;