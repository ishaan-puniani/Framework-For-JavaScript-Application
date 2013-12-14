define(["base/base", "base/mediator", "base/logger"], function(base, mediator, logger) {


    var observable = base.extend({
        
        /**
         * Constructor method that is call when object is created
         * @name base#publishEvent
         * @function init
         * @author Ishaan Puniani -- 11-10-2013
         * @description This is the base class constructor and called automatically if not overriden
         * @example
         * 
         * To execute the base from overrided init use _super() as
         * 
         *  var child = base.extend({
         *      init:function(){
         *         this._super();
         *      }
         *  });
         *  @param {string} evnt event that is published
         */
        publishEvent: function(evnt) {
            logger.log(logger.messageType.evntPublish, evnt);
            mediator.publish(evnt);
        },
        /**
         * Constructor method that is call when object is created
         * @name base#subscribeEvent
         * @function 
         *
         * @example
         * 
         * To execute the base from overrided init use _super() as
         * 
         *  var child = base.extend({
         *      init:function(){
         *         this._super();
         *      }
         *  });
         * 
         */
        subscribeEvent: function(evnt, handler) {
            logger.log(logger.messageType.evntSubscribeh, evnt);
            mediator.subscribe(evnt, handler);
        }        
    });

    return observable;
});


