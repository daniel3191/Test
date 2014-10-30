/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function() {
    'use strict';

    client.Views.TaskView = Backbone.View.extend({
        
        el: '#appendTo',
        
        initialize: function(){
            //console.log('in model');
            this.model.on('destroy', this.remove, this);
            this.model.on('change', this.render, this);
        },
        template: JST['app/scripts/templates/viewtasks.ejs'],
         /**
         * Events managed by this view
         Event's List:
            change, click, dblclick, focus, focusin, focusout,
            hover, keydown, keypress, load, mousedown, mouseenter,
            mouseleave, mousemove, mouseout, mouseover, mouseup, 
            ready, resize, scroll, select, unload
         */
        events: {
            'click .list': 'getDetails'
        },
         /**
         * Render html
         */
        render: function(){
            console.log('rendering model...');
            var attributes = this.model.toJSON();
           // console.log(this.$el);
            console.log(attributes);
            this.$el.html(this.template(attributes));
            console.log('complete...');
        },
        getDetails : function(){
            $('.details').toggleClass('.hidden').slideToggle('fast');
        },
        remove: function(){
            this.$el.remove();
        }

    });

//////////////////////////////////////////////////////////

    

})();