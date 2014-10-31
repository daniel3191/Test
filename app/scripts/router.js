(function() {
    'use strict';
    /**
     *  Set 'el' for all views,
     */
    Backbone.View.prototype.el = client.el;

    var router;
    /**
     * Backbone Router
     */


    client.Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'tasks': 'tasks',
            '*404': 'notFound'
        }
    });

    /**
     * Create an instance of a router, with predefined routes
     * @type {Object}
     */
    router = new client.Router();

    /**
     * Triggered when visit /
     */
    router.on('route:home', function() {
        return new client.HomeView().render();
       
    });

    router.on('route:tasks', function() {
        return new client.TaskIndexView().render();

        // if (typeof client.Views.TaskCollectionView.render === "undefined") {
        //     return client.Views.TaskCollectionView.render();
        // }

    });

    Backbone.history.start();
})();