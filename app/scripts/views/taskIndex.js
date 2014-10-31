(function() {
    'use strict';

    client.TaskIndexView = Backbone.View.extend({

        template: JST['app/scripts/templates/viewIndexTask.ejs'],

        /**
         * Initialized events
         */
        initialize: function() {
            this.collection = new client.TaskIndex();
            this.collection.url = '/data.json';
            var self = this;

            this.collection.fetch({
                success: function(collection, response) {
                    //console.log(' loaded!');
                    self.render();
                },
                error: function(error) {
                    console.log('Failed to fetch.', error);
                }
            });

            this.collection.on('add', this.renderTask, this); 

        },

        /**
         * Render html
         */
        render: function() {
            var self = this;
            this.$el.html(this.template());
            
            this.collection.models.map(function(task) {
                self.renderTask(task);
            });
        },

        renderTask: function(task) {
            return new client.TaskView({
                model: task
            }).render().el;
        }
    });
})();