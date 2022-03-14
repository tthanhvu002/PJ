const express = require('express'); 
const UserScription = require("controller/user_subscription");

const router = express.Router(); 


router.get("/", UserScription.index); 
router.get("/add", UserScription.add); 
router.get("/edit/:id", UserScription.edit); 


module.exports = router; 