const express = require('express'); 
const Issues = require("controller/issues");

const router = express.Router(); 


router.get("/", Issues.index); 
router.get("/add", Issues.add); 
router.get("/edit/:id", Issues.edit); 


module.exports = router; 