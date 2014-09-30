RequireJSHelper.overrideBaseURL("src/main/js/");

describe('logger', function() {
    var suite = this;

    beforeEach(function() {
        require(['base/logger'], function(logger) {
            suite.child = logger;
        });
    });

    it('Must have logger, messageType, log, logError, logInfo', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child).toBeDefined();
            expect(suite.child.messageType).toBeDefined();
            expect(suite.child.log).toBeDefined();
            expect(suite.child.logError).toBeDefined();
            expect(suite.child.logInfo).toBeDefined();
        });
    });

    it('messageType Must have  info: "Information",error: "Error",evntSubscribe: "SubscribeEvent",evntPublish: "PublishEvent"', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            expect(suite.child.messageType.info).toEqual("Information");
            expect(suite.child.messageType.error).toEqual("Error");
            expect(suite.child.messageType.evntSubscribe).toEqual("SubscribeEvent");
            expect(suite.child.messageType.evntPublish).toEqual("PublishEvent");
        });
    });

    it('logError Must call logger.log with messageType = error: "Error"', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            spyOn(suite.child, "log");
            suite.child.logError("test error");
            expect(suite.child.log).toHaveBeenCalled();
            expect(suite.child.log).toHaveBeenCalledWith("Error", "test error");
        });
    });

    it('logInfo Must call logger.log with messageType = info: "Information"', function() {
        waitsFor(function() {
            return suite.child;
        });

        runs(function() {
            spyOn(suite.child, "log");
            suite.child.logInfo("test info");
            expect(suite.child.log).toHaveBeenCalled();
            expect(suite.child.log).toHaveBeenCalledWith("Information", "test info");
        });
    });

});