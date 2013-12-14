define(["util/Class"], function()
{
    /** 
     * Base class for all Modules in the framework.
     * @name base
     * @class base
     * @author Ishaan Puniani -- 11-10-2013
     * @description This is the base class for all the modules.
     * @extends Class
     * @modeified 
     * @requires "util/Class"
     * @example
     * var child = base.extend({
     *
     *    });
     * @constructor init
     * @return Common functionalities of the modules wrapped in an base class Object
     */
    var base = Class.extend(
            {
                /**
                 * Constructor method that is call when object is created
                 * @name base#init
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
                 *  
                 */
                init: function()
                {
                }
            });
    return base;
});
