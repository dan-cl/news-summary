NewsApp.Views.Read = Backbone.View.extend({

    initialize: function(options) {

    },

    template: "<div id='article-read'>  </div>",


    render: function()
    {
        this.$el.html(this.template);
        return this;
    },

    getarticles: function() {

        var title = this.$el.find('input').val();
        var articles = new NewsApp.Collections.ArticleCollection({title: title});

        articles.fetch();
        articles.fetch({success: this.rendersummary.bind(this)});
    },

    rendersummary: function(articles) {

        var summaryView;

        console.log(articles.models)
        for (var n in articles.models) {

            summaryView = new NewsApp.Views.SummaryView({model: articles.models[n]});

            this.$el.find('#article-list').append(summaryView.render().el);
        }
    },


    events: {
        'click a' : 'getarticles'

    },


});
