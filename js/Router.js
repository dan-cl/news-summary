NewsApp.Router = Backbone.Router.extend({
  routes:{
    'home': 'home',
    'search': 'search',
    '*path': 'home'
  },

  home: function(){
    var view = new NewsApp.Views.Home();
    $('#main').html(view.render().el);
  },

  search: function(){
    var view = new NewsApp.Views.Search();
    $('#main').html(view.render().el);
  }
});
