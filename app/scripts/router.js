client.Router =  client.Router || {};

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
            'task': 'task',
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
        if (typeof client.Views.HomeView.render === "undefined") {
           client.Views.HomeView = new client.Views.HomeView();
        }
        return client.Views.HomeView.render();
    });

    router.on('route:task', function() {
        /*if (typeof client.Views.TaskCollectionView.render === "undefined") {
                client.Views.TaskCollectionView = new client.Views.TaskCollectionView(directory);
        }
        return client.Views.TaskCollectionView.render();*/
        
        if (typeof client.Views.TaskCollectionView.render === "undefined") {
            client.Views.TaskCollectionView = new client.Views.TaskCollectionView();
            return client.Views.TaskCollectionView.render();
        }
       
    });

    Backbone.history.start();
})();