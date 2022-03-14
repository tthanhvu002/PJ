const express = require('express'); 
const path = require("path"); 
const userRoutes = require("routes/user"); 
const userSubscriptionRoutes = require("routes/user_subscription"); 
const videosRoutes = require("routes/videos"); 
const issuesRoutes = require("routes/issues"); 
const router = express.Router(); 

const bodyParser = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false }); 


router.use("/assets", express.static(path.join(__dirname, "..", "assets"))); 


router.get
(
    '/',
    function(request, response, next)
    {
        response.render("login"); 
    }
);
router.use("/user", userRoutes); 
router.use("/user_subscription", userSubscriptionRoutes); 
router.use("/videos", videosRoutes); 
router.use("/issues", issuesRoutes); 

module.exports = router; 