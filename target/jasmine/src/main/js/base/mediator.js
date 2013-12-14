define(function(mediator) {
    /** 
     * Mediator to manage event deligation.
     * @name mediator
     * @class mediator
     * @author Ishaan Puniani -- 11-10-2013
     * @description 
     * @modeified 
     * @requires 
     * @example
     * 
     *  mediator.publish(evnt);
     *  mediator.subscribe(evnt,subscriber);
     *  
     * @constructor singleton
     * @return Shared Mediator object to publish and subscribe events
     */
    var channels = {};
    if (!mediator)
    {
        mediator = {};
    }

    /**
     * Method to subscribe for event 
     * @name mediator#subscribe
     * @function subscribe
     * @author Ishaan Puniani -- 11-10-2013
     * @modified
     * @description Method called by subscriber to listen to a particular event
     * @example
     * 
     *  mediator.subscribe("gui:btnSayHello_Click", handler);
     *  
     *  // or
     *  
     *  mediator.subscribe("gui:btnSayHello_Click", function(){
     *  alert('Say Hello');
     *  });
     *  
     *  @param {string} channel event name to subscribe
     *  @param {function} subscription Handler for the subscribed event
     */
    mediator.subscribe = function(channel, subscription) {
        if(channel === null || channel === undefined)
            {
                throw new Error("channel can't be undefined");
            }
        if(subscription === null || subscription === undefined)
            {
                throw new Error("subscription handler can't be undefined");
            }
            
        if (!channels[channel]) {
            channels[channel] = [];
        }
        channels[channel].push(subscription);
    };

    /**
     * Method to publish an event 
     * @name mediator#publish 
     * @function publish 
     * @author Ishaan Puniani -- 11-10-2013
     * @modified
     * @description Method called by publisher to notify all the listeners for a particular event
     * @example
     * 
     *  mediator.publish(evnt);
     *  
     *  Or
     *  
     *  mediator.publish("gui:btnSayHello_Click");
     *  
     *  @param {string} channel event to publish that is notified to all the subscribers
     */
    mediator.publish = function(channel) {
        if(channel === null || channel === undefined)
            {
                throw new Error("channel can't be undefined");
            }
            
        if (!channels[channel]) {
            return;
        }
        var args = [].slice.call(arguments, 1);
        for (var i = 0, l = channels[channel].length; i < l; i++) {
            channels[channel][i].apply(this, args);
        }
    };

    return mediator;

});