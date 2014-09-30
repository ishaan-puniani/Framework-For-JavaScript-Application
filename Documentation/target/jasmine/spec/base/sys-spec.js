RequireJSHelper.overrideBaseURL("src/main/js/");

describe('sys', function() {
    var suite = this;

    beforeEach(function() {
        require(['base/sys'], function(sys) {
            suite.child = sys;
        });
    });

    it('Must have sys, isEmpty, isDefined, isNullOrEmpty, isArray, isString, isObj', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child).toBeDefined();
            expect(suite.child.isEmpty).toBeDefined();
            expect(suite.child.isDefined).toBeDefined();
            expect(suite.child.isNullOrEmpty).toBeDefined();
            expect(suite.child.isArray).toBeDefined();
            expect(suite.child.isString).toBeDefined();
            expect(suite.child.isObj).toBeDefined();
        });
    });

    it('isEmpty Must return true if empty objects is passed', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            // +ve casees
            expect(suite.child.isEmpty("")).toBeTruthy();
            expect(suite.child.isEmpty([])).toBeTruthy();
            
            expect(suite.child.isEmpty({})).toBeFalsy(); // since it is an object literal
            expect(suite.child.isEmpty("test")).toBeFalsy();
            expect(suite.child.isEmpty(["1"])).toBeFalsy();
            expect(suite.child.isEmpty([1])).toBeFalsy();
            

        });
    });
    
    it('isEmpty Must throw exception for null or undefined objects', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            // -ve cases            
            expect(function() {
                suite.child.isEmpty();
            }).toThrow();
            expect(function() {
                suite.child.isEmpty(null);
            }).toThrow();
            expect(function() {
                suite.child.isEmpty(undefined);
            }).toThrow();
            

        });
    });
    
    
        it('isDefined Must return true if objects is defined', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            // +ve casees
            expect(suite.child.isDefined("")).toBeTruthy();
            expect(suite.child.isDefined([])).toBeTruthy();
            expect(suite.child.isDefined({})).toBeTruthy();
            expect(suite.child.isDefined("test")).toBeTruthy();
            expect(suite.child.isDefined(["1"])).toBeTruthy();
            expect(suite.child.isDefined([1])).toBeTruthy();
            
            expect(suite.child.isDefined(null)).toBeFalsy();
            expect(suite.child.isDefined(undefined)).toBeFalsy();
            expect(suite.child.isDefined()).toBeFalsy();
        });
    });
    
    it('isNullOrEmpty Must pass for null or empty objects', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child.isNullOrEmpty("")).toBeTruthy();
            expect(suite.child.isNullOrEmpty([])).toBeTruthy();
            
            expect(suite.child.isNullOrEmpty(null)).toBeTruthy();
            expect(suite.child.isNullOrEmpty(undefined)).toBeTruthy();
            expect(suite.child.isNullOrEmpty()).toBeTruthy();
            expect(suite.child.isNullOrEmpty("test")).toBeFalsy();
            expect(suite.child.isNullOrEmpty(["1"])).toBeFalsy();
            expect(suite.child.isNullOrEmpty([1])).toBeFalsy();
            expect(suite.child.isNullOrEmpty({})).toBeFalsy();

        });
    });
    
    it('isArray Must return true if object is an array objects', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child.isArray(["1"])).toBeTruthy();
            expect(suite.child.isArray([1])).toBeTruthy();
            expect(suite.child.isArray([])).toBeTruthy();
            
            expect(suite.child.isArray("")).toBeFalsy();
            expect(suite.child.isArray(null)).toBeFalsy();
            expect(suite.child.isArray(undefined)).toBeFalsy();
            expect(suite.child.isArray()).toBeFalsy();
            expect(suite.child.isArray("test")).toBeFalsy();
            expect(suite.child.isArray({})).toBeFalsy();
        });
    });

    it('isString Must return true if object is a string', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child.isString("1")).toBeTruthy();
            expect(suite.child.isString("")).toBeTruthy();
            expect(suite.child.isString("test")).toBeTruthy();
            
            expect(suite.child.isString([])).toBeFalsy();
            expect(suite.child.isString(1)).toBeFalsy();
            expect(suite.child.isString(null)).toBeFalsy();
            expect(suite.child.isString(undefined)).toBeFalsy();
            expect(suite.child.isString()).toBeFalsy();
            expect(suite.child.isString({})).toBeFalsy();
        });
    });

    it('isObj Must return true if object is a native object', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child.isObj(new Object())).toBeTruthy();
            expect(suite.child.isObj({})).toBeTruthy();
            expect(suite.child.isObj(null)).toBeTruthy();
            
            expect(suite.child.isObj("test")).toBeFalsy();
            expect(suite.child.isObj([])).toBeFalsy();
            expect(suite.child.isObj(["q"])).toBeFalsy();
            expect(suite.child.isObj([1])).toBeFalsy();
            expect(suite.child.isObj(1)).toBeFalsy();
            expect(suite.child.isObj(undefined)).toBeFalsy();
            expect(suite.child.isObj()).toBeFalsy();
        });
    });

});