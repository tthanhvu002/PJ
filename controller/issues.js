class Issues
{
    static index(request, response, next)
    {
        response.render("issues/index"); 
    }
    static add(request, response, next)
    {
        response.render("issues/add"); 
    }
    static edit(request, response, next)
    {
        response.render("issues/edit", {user: request.params.id}); 
    }
}

module.exports = Issues; 