define(["base/observable"], function(observable){
   /** 
     * User Module that represent the user in tha application.
     * @name user
     * @class user
     * @author Ishaan Puniani -- 11-10-2013
     * @description A user is an module that subscribe to say hello event.
     *  It adds a subscriber i.e. it tells the framework that i am interested in linstening to this event
     *  and framework will invoke this method when this event is fired
     * @extends observable
     * @modeified 
     * @requires "base/observable"
     * @example
     * 
     * var player1 = new user();
     *
     * @constructor init
     * @return user
     */
    var user = observable.extend({
        init:function(){
           this._super( );
           
           // add a subscriber i.e. it tells the framework that i am interested in linstening to this event
           // and framework will invoke this method when this event is fired
           this.subscribeEvent("btnSayHello:Click",function(){
               alert('btnSayHello:Click is subscribed from user module');
           }); 
        }
    });
    
    return user;
});