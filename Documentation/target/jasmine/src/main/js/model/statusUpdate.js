define(["base/observable"], function(observable){
    /** 
     * statusUpdate Module that holds the status.
     * @name statusUpdate
     * @class statusUpdate
     * @author Ishaan Puniani -- 11-10-2013
     * @description This will be ment for future implementation.
     * @extends observable
     * @modeified 
     * @requires "base/observable"
     * @example
     * 
     * var status = new statusUpdate();
     * 
     * @constructor init
     * @return statusUpdate
     */
var statusUpdate = observable.extend({
    init:function(){
        this._super( );
    }
});

    /**
    * Enter a new message for this update.
    * @param newMessage String
    */
    statusUpdate.prototype.edit = function(newMessage) {
        this.message = newMessage;
    };
   
    return statusUpdate;
});