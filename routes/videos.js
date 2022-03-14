const express = require('express'); 
const Videos = require("controller/videos");

const router = express.Router(); 


router.get("/", Videos.index); 
router.get("/add", Videos.add); 
router.get("/edit/:id", Videos.edit); 


module.exports = router; 