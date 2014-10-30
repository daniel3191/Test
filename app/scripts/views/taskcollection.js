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
            var self = this;
            $(this.el).html(this.template(this.$el.empty()));
            _.each(this.collection.models, function(data){
                console.log(this.collection.models);
                for (var i = 0; i = (this.collection.length)-1; i++){
                    self.renderTask(data);
                }
            }, this);
            return this;
        },

        renderTask: function(data){

            var TaskItem = new client.Views.TaskView({model: data});
            console.log(TaskItem.el);
            debugger;
            $('#appendTo').append(TaskItem.render().el);
            console.log(TaskItem.el);
        }
        
    });
})();

