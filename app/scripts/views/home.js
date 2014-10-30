/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function() {
    'use strict';

    client.Views.HomeView = Backbone.View.extend({
        el: '#page',
        template: JST['app/scripts/templates/viewhome.ejs'],
         /**
         * Events managed by this view
         */
         
        events: {
            'click #taskbutton':'getTaskData',
        },
     
         /**
         * Render html
         */
        render: function() {
            return this.$el.html(this.template());
        },

        getTaskData: function(){
            console.log('within getTaskData function');
            Backbone.history.navigate('task', {trigger: true});
            return false;
        }   
    });
})();