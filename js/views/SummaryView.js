NewsApp.Views.SummaryView = Backbone.View.extend({
  tagName: 'div',

    initialize: function(options) {

        if (options.model)
            this.model = options.model;
    },

    render: function() {

      var thumbnail = this.model.attributes.fields.thumbnail;
      var headline = this.model.attributes.fields.headline;
      var address = this.model.attributes.fields.shortUrl;

      this.$el.html('<p><img src="'+thumbnail+'"/>'+'<br>'+'<a href="'+address+'">'+headline+'</a>');

      return this;
    }
});
