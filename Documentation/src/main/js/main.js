require.config({
    // paths are analogous to old-school <script> tags, in order to reference js scripts
    paths: {
        Class: "util/Class"
    }
});

/*
 * Module to define main
 */
require(["model/statusUpdate", "model/user", "service/gui"], function(StatusUpdate, User, Gui) {

    var testUser = new User("1", "testUser");
    var update = new StatusUpdate("Hello World", testUser);

    var container = new Gui({tag: "div", id: "container", renderTo: "body"});

    // Create a DOM element of type "button" 
    // and configure its click event to raise the "btnSayHello:Click" event.
    var elemnt = new Gui({tag: "button", id: "btnFireEvent", clickable: {
            onClickEvent: function() {
                this.publishEvent("btnSayHello:Click");
            }
        }, renderTo: "container", innerText: "Say Hello!"});

});
