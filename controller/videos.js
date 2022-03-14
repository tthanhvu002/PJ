class Videos
{
    static index(request, response, next)
    {
        response.render("videos/index"); 
    }
    static add(request, response, next)
    {
        response.render("videos/add"); 
    }
    static edit(request, response, next)
    {
        response.render("videos/edit", {user: request.params.id}); 
    }
}

module.exports = Videos; 