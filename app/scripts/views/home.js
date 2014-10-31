(function() {
    'use strict';

    client.HomeView = Backbone.View.extend({
        el: '#page',
        template: JST['app/scripts/templates/viewHome.ejs'],
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
            Backbone.history.navigate('tasks', {trigger: true});
            return false;
        }   
    });
})();