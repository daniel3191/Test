///////init script
//
//
(function() {
    'use strict';

    client.Models.Task = Backbone.Model.extend({
    	
    	defaults: {
        	title       : 'none',
			description   : 'none',
			initDate    : 'hh:mm:ss || dd/MM/yyyy',
			endDate     : 'none',
			type        : 'normal/home',
			status      : 'incomplete',
			save        : 'no',
			priority    : 'normal'
        }

    });

    ////// [--Functions--]
    //events: Model-instance.on('event', function);
    //	change, change: <attr>, destroy, sync, error, all 


})();
