define(function() {

    /** 
     * Application Logger 
     * @name logger
     * @class logger
     * @author Ishaan Puniani -- 11-10-2013
     * @description Logger top log all kind of errors , info messages etc.
     * @extends 
     * @modeified 
     * @requires 
     * @example
     * 
     * logger.log("this is logged");
     * 
     * @constructor init
     * @return 
     */
    var logger = {
        /**
         * Constant field to add type information while logging 
         * @name logger#messageType
         * @constant Message Type that is going to be logged
         * @author Ishaan Puniani -- 11-10-2013
         * @description Type of Message to be logged like "Error-", "Information-"
         * @example
         * 
         *  logger.messageType.info
         *  logger.messageType.error
         *  logger.messageType.evntSubscribe
         *  logger.messageType.evntPublish
         *  
         */
        messageType: {
            info: "Information",
            error: "Error",
            evntSubscribe: "SubscribeEvent",
            evntPublish: "PublishEvent"
        },
        /**
         * Method to log messages
         * @name logger#log
         * @function log
         * @author Ishaan Puniani -- 11-10-2013
         * @description Method to log messages, Errors etc
         * @example
         * 
         * logger.log(logger.messageType.evntPublish,evnt);
         *  
         *  @param {string} type message type to be logged
         *  @param {string} txtMessage Message to be logged
         */
        log: function(type, txtMessage) {
            console.log(type + " - " + txtMessage);
        },
        /**
         * Method to log errors
         * @name logger#logError
         * @function logError
         * @author Ishaan Puniani -- 11-10-2013
         * @description Method to log Errors 
         * @example
         * 
         * logger.logError(error message);
         *  
         *  @param {string} message Message to be logged
         */
        logError: function(message) {
            this.log(this.messageType.error, message);
        },
        /**
         * Method to log Information
         * @name logger#logInfo
         * @function logInfo
         * @author Ishaan Puniani -- 11-10-2013
         * @description Method to log Information
         * @example
         * 
         * logger.logInfo(info);
         *  
         *  @param {string} info Information to be logged
         */
        logInfo: function(info) {
            this.log(this.messageType.info, info);
        }
    };

    return logger;
});


