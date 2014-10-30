/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function() {
    'use strict';

    

    client.Views.TaskCollectionView = Backbone.View.extend({
        el: '#page',
        collection: client.Collections.TaskCollection,
        template: JST['app/scripts/templates/viewindextask.ejs'],
        /**
         * Initialized events
         */
        initialize: function(){
            this.collection = new client.Collections.TaskCollection();
            this.collection.url = '/data.json';
            var that = this;

            this.collection.fetch({
                success: function(collection, response){
                    //console.log(' loaded!');
                    that.render();
                },
                error: function(error){
                    console.log('Failed to fetch.', error);
                }
            });
            
        },
        /**
         * Events managed by this view
         */
        events: {

        },
         /**
         * Render html
         */
        render: function(){
            console.log(this.collection.models);
            this.$el.html(this.template());
            this.collection.forEach(this.renderTask, this);
        },

        renderTask: function(data){

            var TaskItem = new client.Views.TaskView({model: data});
            this.$el.append(TaskItem.render(data).el);
        }
        
    });
})();

