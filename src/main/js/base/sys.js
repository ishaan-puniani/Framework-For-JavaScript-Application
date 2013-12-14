define(function(sys) {
    /** 
     * sys is a singleton system class that has all the basic functionalities
     * @name sys
     * @class sys
     * @author Ishaan Puniani -- 11-10-2013
     * @description 
     * @modeified 
     * @requires 
     * @example
     * 
     *  sys.isEmpty(evnt);
     *  
     * @constructor singleton
     * @return Shared system object for basic functionalitiies
     */
    if (!sys) {
        sys = {};
    }

    /**
     * Method to verify the object is empty or null 
     * @name sys#isEmpty
     * @function isEmpty
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is null or undefined or array has no element 
     * @example
     * 
     *  if(this.isEmpty(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} o object to validate
     */
    sys.isEmpty = function(o) {
        return (o === "") || (o.length === 0) || (this.isArray(o) && !o.length);
    };
    /**
     * Method to verify the object is empty or null 
     * @name sys#isNullOrEmpty
     * @function isNullOrEmpty
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is null or undefined or array has no element 
     * @example
     * 
     *  if(this.isNullOrEmpty(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} o object to validate
     */
    sys.isNullOrEmpty = function(o) {
        var nullOrEmpt =  true;
        if(this.isDefined(o)){
            nullOrEmpt= this.isEmpty(o);
        }
        return nullOrEmpt;
    };
    /**
     * Method to verify the object is not undefined
     * @name sys#isDefined
     * @function isDefined
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is not undefined
     * @example
     * 
     *  if(this.isDefined(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} o object to validate
     */
    sys.isDefined = function(o) {
        // checking typeof is more secure than just comparing type, since this also handles
        // situations where o is not declared
        return (typeof o !== "undefined" &&  o !== null);
    };
    /**
     * Method to verify the object is an Array
     * @name sys#isArray
     * @function isArray
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is an Array
     * @example
     * 
     *  if(this.isArray(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} arr object to validate
     */
    sys.isArray = function(arr) {
        var type = window.toString.apply(arr);
        return (type === '[object Array]' || type === '[object NodeList]' || type === '[object TouchList]');
    };
    /**
     * Method to verify the object is a string
     * @name sys#isString
     * @function isString
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is String
     * @example
     * 
     *  if(this.isString(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} str object to validate
     */
    sys.isString = function(str) {
        return !this.isArray(str) && (typeof str === "string");
    };
    /**
     * Method to verify the object is an Object
     * @name sys#isObj
     * @function isObj
     * @author Ishaan Puniani -- 11-10-2013
     * @description Method to verify the object is an Object and not an Array
     * @example
     * 
     *  if(this.isObj(obj))
     *  {
     *      // do stuff here
     *  }
     *  
     *  @param {object} obj object to validate
     */
    sys.isObj = function(obj) {
        return !this.isArray(obj) && (typeof obj === "object");
    };
    return sys;
});


