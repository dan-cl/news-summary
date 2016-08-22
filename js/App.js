var NewsApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

$(document).ready(function(){
    NewsApp.Router.Instance = new NewsApp.Router();
    Backbone.history.start();
});
