(function() {
    'use strict';

    client.TaskView = Backbone.View.extend({

        el: '#appendTo',
        template: JST['app/scripts/templates/viewTasks.ejs'],

        initialize: function() {
            this.model.listenTo(this.model, 'destroy', this.remove);
            this.model.listenTo(this.model, 'change', this.render);
        },

        events: {
            'click .list': 'getDetails'
        },

        /**
         * Render html
         */
        render: function() {
            return this.$el.append(this.template(this.model.attributes));
        },

        getDetails: function(e) {
            $(e.target).toggleClass('.hidden');
            $(e.target).siblings('.details').slideToggle('fast');
        },

        remove: function() {
            this.$el.remove();
            return new client.TaskIndexView();
        }
    });
})();