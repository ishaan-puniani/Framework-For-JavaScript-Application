/**
 * Top level namespace for RequireJSHelper
 * @namespace
 */
var RequireJSHelper = (function() {
    var dependenciesLoaded = false;
    var dependencyMap = {};
    
    /**
     * RequireJSHelper is a static helper class that provides RequireJS integration
     * with the Jasmine BDD testing framework. Instead of calling require(..) directly,
     * you may choose to use RequireJSHelper instead, in conjunction with the 
     * RequireJSHelper.whenReady callback to wait for the injection of dependencies
     * to complete, before executing your Jasmine test statements.
     * 
     * @constructor
     */
    function RequireJSHelper() {
    }
    
    /**
     * Empty out dependency map.
     * @private
     */
    function clearDependencyMap() {
        for(var key in dependencyMap) {
            delete dependencyMap[key];
        }
    }
    
    /**
     * Set base URL for RequireJS context
     * @static
     * @param url String
     */
    RequireJSHelper.overrideBaseURL = function(url) {
        require.apply(this, [{
            baseUrl:url
        }]);
    };
    
    /**
     * Dependencies loaded?
     * 
     * @return Boolean
     * @static
     */
    RequireJSHelper.dependenciesLoaded = function() {
        return dependenciesLoaded;
    };
    
    /**
     * Load dependencies for Jasmine Spec.
     * 
     * @param deps Array of dependencies, e.g. ["model/User"]
     * @param callback Function to be called when ready to continue (optional)
     * @static
     */
    RequireJSHelper.require = function(deps, callback) { 
        var onDependenciesLoaded = function() {
            var args = arguments;
            
            // store loaded dependencies
            //            clearDependencyMap();
            if(args.length > 0) {
                for(var i = 0; i < args.length; i++) {
                    dependencyMap[deps[i]] = args[i];
                }
            }
            
            dependenciesLoaded = true;
            if(callback) RequireJSHelper.whenReady(callback);
        };
        
        dependenciesLoaded = false;
        require.apply(this, [deps, onDependenciesLoaded]);
    };
    
    /**
     * Callback to run when dependencies are loaded.
     * 
     * @param callback Function
     */
    RequireJSHelper.whenReady = function(callback) {
        var me = this;
        
        waitsFor(function() {
            return dependenciesLoaded == true;
        });
        
        runs(function() {
            var requestedDeps = callback.prototype.constructor.toString().split("(")[1].split(")")[0].split(","),
            deps = [];
        
            for(var i=0; i<requestedDeps.length; i++) {
                var requestedDepName = requestedDeps[i];
                
                for(var depName in dependencyMap) {
                    if(depName.indexOf(requestedDepName) > -1) {
                        deps.push(dependencyMap[depName]);
                    }
                }
            }
        
            callback.apply(me, deps);
        });
    };
    
    return RequireJSHelper;
}());