(function() {
    'use strict';
    client.TaskIndex = Backbone.Collection.extend();
    var TaskIndexItem = new client.TaskIndex({
    	model: client.Task,

    	url: '/app/data.json',
    	parse: function(response){
    		return response.shots;
    	}
    });

})();
 