const UserController = require('../Controllers/UserController');

const router = require('express').Router();

router.post('/addRemark', UserController.createUserRemark);
router.get('/getAll', UserController.getAllRemarks);
router.get('/getSingle/:id', UserController.getSingleRemark);
router.put('/Update/:id', UserController.UpdateRemark);


module.exports = router