class UserScription
{
    static index(request, response, next)
    {
        response.render("user_subscription/index"); 
    }
    static add(request, response, next)
    {
        response.render("user_subscription/add"); 
    }
    static edit(request, response, next)
    {
        response.render("user_subscription/edit", {user: request.params.id}); 
    }
}

module.exports = UserScription; 