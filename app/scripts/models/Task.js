///////init script
//
//
(function() {
    'use strict';

    client.Task = Backbone.Model.extend({
    	
    	defaults: {
        	title       : 'none',
			description   : 'none',
			initDate    : 'hh:mm:ss || dd/MM/yyyy',
			endDate     : 'none',
			type        : 'normal/home',
			status      : 'incomplete',
			save        : 'no',
			priority    : 'normal'
        },

        url: '/tasks',

        urlROOT: '/tasks'

    });

    ////// [--Functions--]
    //events: Model-instance.on('event', function);
    //	change, change: <attr>, destroy, sync, error, all 


})();
