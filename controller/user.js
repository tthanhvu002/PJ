class User
{
    static index(request, response, next)
    {
        response.render("user/index"); 
    }
    static add(request, response, next)
    {
        response.render("user/add"); 
    }
    static edit(request, response, next)
    {
        response.render("user/edit", {user: request.params.id}); 
    }
}

module.exports = User; 