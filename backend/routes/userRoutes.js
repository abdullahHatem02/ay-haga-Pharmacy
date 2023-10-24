const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();



router.post('/signup',  authController.upload.array('documents', 5) ,authController.signup);
router.post('/login', authController.login);
router.get('/', userController.getAllUsers);
router.route("/:id").delete(userController.deleteUser);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword', authController.resetPassword);


router.patch('/updateMyPassword', authController.protect,authController.updatePassword);

module.exports = router;
