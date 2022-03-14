require("module-alias/register"); 
const routes = require("routes"); 
const express = require("express"); 
const path = require("path"); 
const app = express(); 
app.set("port",process.env.PORT || 3000); 
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs"); 

app.use(routes);
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(app.get("port"));

  
app.listen(8080);
 