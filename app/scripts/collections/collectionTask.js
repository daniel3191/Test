///////init script
//
//
/*global client, Backbone, JST*/

client.Collections = client.Collections || {};

(function() {
    'use strict';
    client.Collections.TaskCollection = Backbone.Collection.extend();
    var TaskItemCollection = new client.Collections.TaskCollection({
    	model: client.Models.Task,

    	url: '/app/data.json',
    	parse: function(response){
    		return response.shots;
    	}
    });

})();
 