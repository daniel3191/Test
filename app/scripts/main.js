/*global client, $*/


window.client = {

    /**
     * Store instance of models, used to cache
     * @type {Object}
     */
    Models: {},

    /**
     * Store Backbone model object to reuse on initialize new ones
     * @type {Object}
     */
    Model: {},

    /**
     * Store collections objects, used to cache
     * @type {Object}
     */
    Collections: {},
    Collection: {},
    Views: {},
    View: {},
    Router: {},
    el: document.getElementById('page'),

    /**
     * qs stands for query string
     * @param  {String} name param name
     * @return {String}      null || param value
     */
    qs: function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    /**
     * API URL
     * @type {String}
     */
    API: 'http://localhost:3000'
};
