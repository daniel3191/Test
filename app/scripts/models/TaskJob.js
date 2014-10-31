///////init script
//
//
(function() {
    'use strict';

    client.Task = Backbone.Model.extend({
        defaults: {
        	proyectName  : 'none',
            clientName   : 'none',
            organization : 'none',
            contact      : {
                phoneNumber    : 'none',
                celphoneNumber : 'none',
                email          : 'none'
            },
            cost         : {
                costPerHour           : 0.00,
                workedHours           : {
                    hour   : 00,
                    minute : 00
                },
                workedTimeDescription : 'none',
               otherCosts            : 0.00,
               otherCostsDescription : 'none',
               totalCost             : 0.00
            },
            deliverDate  : 'none'
        }, 
    });
    
})();