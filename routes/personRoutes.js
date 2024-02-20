const express=require('express');
const { register, login, getPersonData } = require('../Conrollers/personControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const router =express.Router();
const Person=require('../modles/personModel')


router.post('/Register', register);
router.post('/login', login);
router.get('/', authMiddleware, getPersonData);
module.exports = router;