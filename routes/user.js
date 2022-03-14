const express = require('express'); 
const User = require("controller/user");

const router = express.Router(); 


router.get("/", User.index); 
router.get("/add", User.add); 
router.get("/edit/:id", User.edit); 


module.exports = router; 