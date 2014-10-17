/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function() {
    'use strict';

    client.Views.HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/home.ejs'],
         /**
         * Events managed by this view
         */
        events: {},
         /**
         * Render html
         */
        render: function() {
            return this.$el.html(this.template());
        }
    });
})();
