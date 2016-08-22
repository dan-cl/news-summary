NewsApp.Collections.ArticleCollection = Backbone.Collection.extend({
  initialize: function(options){
        //if (options.title)
            //this.title = options.title;
    },

    url: function()
    {

      var MAKERS_API_URL = "http://news-summary-api.herokuapp.com/guardian";
      var MAKERS_API_REQUEST = "?apiRequestUrl=";
      var GUARDIAN_API = "http://content.guardianapis.com/"
      var GUARDIAN_QUERY = "uk?show-editors-picks=true&show-fields=all";
      var ENCODED_URL = encodeURIComponent(GUARDIAN_API + GUARDIAN_QUERY)
        return MAKERS_API_URL + MAKERS_API_REQUEST + ENCODED_URL;
    },

    parse: function(response)
    {

      console.log(response.response.editorsPicks[0]);
        return response.response.editorsPicks;
    }

});
