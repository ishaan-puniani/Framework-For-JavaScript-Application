RequireJSHelper.overrideBaseURL("src/main/js/");

describe('mediator', function() {
    var suite = this;
    
    beforeEach(function() {
        require(['base/mediator'], function (mediator) {
            suite.child =  mediator; 
        });
    });
    
    it('Must have mediator ,subscribe and publish ', function() {
        waitsFor(function() {
            return suite.child;
        });
        
        runs(function() {
            expect(suite.child).toBeDefined();
            expect(suite.child.subscribe).toBeDefined();
            expect(suite.child.publish).toBeDefined();
        });
    });
    
    it('Must call subscribe and publish and return undefined', function() {
        waitsFor(function() {
            return suite.child;
        });
        
        runs(function() {
             var subscribed = suite.child.subscribe("jasmineFakeEvent",function(){/*jasmineFakeEvent handler*/});
             expect(subscribed).toBeUndefined();
             
             var published = suite.child.publish("jasmineFakeEvent");
             expect(published).toBeUndefined();
        });
    });
    
    it('Must call spyon subscribe and publish ', function() {
        waitsFor(function() {
            return suite.child;
        });
        
        runs(function() {
             spyOn(suite.child, "subscribe");
             suite.child.subscribe("jasmineFakeEvent",function(){/*jasmineFakeEvent handler*/});
             expect(suite.child.subscribe).toHaveBeenCalled();
             
             spyOn(suite.child, "publish");
             suite.child.publish("jasmineFakeEvent");
             expect(suite.child.publish).toHaveBeenCalled();
        });
    });
    
    it('Must throw exception when channel is undefied/null while calling subscribe ' , function(){
        waitsFor(function() {
            return suite.child;
        });
        
        runs(function() {
             expect(function(){
                 suite.child.subscribe(null,function(){/*jasmineFakeEvent handler*/});
             }).toThrow(new Error("channel can't be undefined"));
             
             expect(function(){
                 suite.child.subscribe(undefined,function(){/*jasmineFakeEvent handler*/});
             }).toThrow(new Error("channel can't be undefined"));
             
             expect(function(){
                 suite.child.subscribe("jasmineFakeEvent",null);
             }).toThrow(new Error("subscription handler can't be undefined"));
             
             expect(function(){
                 suite.child.subscribe("jasmineFakeEvent",undefined);
             }).toThrow(new Error("subscription handler can't be undefined"));
             
        });
    }); 
    
    it('Must throw exception when channel is undefied/null while calling publish ' , function(){
        waitsFor(function() {
            return suite.child;
        });
        
        runs(function() {
             expect(function(){
                 suite.child.publish(null);
             }).toThrow(new Error("channel can't be undefined"));
             
             expect(function(){
                 suite.child.publish(undefined);
             }).toThrow(new Error("channel can't be undefined"));
             
        });
    }); 
});