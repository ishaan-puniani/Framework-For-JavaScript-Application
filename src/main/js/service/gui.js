define(["base/observable","base/sys"], function(observable,sys){
   /** 
     * gui module is ment for DOM elements and their manipulation.
     * @name gui
     * @class gui
     * @author Ishaan Puniani -- 11-10-2013
     * @description GUI is very important part of the framework and this module is prefered over native DOM manipulation is fue to the fact that now a days most of the applications are build to support multiple devices.
     *              So, its important to handle the gestures provided by the specific device as efficiently as possible
     * @extends observable
     * @modeified 
     * @requires "base/observable"
     * @example
     * var child = observable.extend({
     *
     *    });
     * @constructor init
     * @return gui element instance
     */
var gui = observable.extend({
    init:function(obj){
        var me = this,el;
        // shorthand to this.isDefined
            var isDef = sys.isDefined;
        
        // if obj is a string, use that for tag name in the DOM element
        if(sys.isString(obj)) {
            el = document.createElement(obj);
        }
        
        // else, if obj is an HTML DOM element, connect to that
        // else, if obj is an object, use it to make more detailed DOM element
        else if(obj !== null && sys.isObj(obj)) {
            if (/HTML[a-zA-z]*Element/i.test(obj.toString())) {
                el = obj;
            }
            else {

                el = document.createElement(obj.tag);

                // if class is defined
                if(isDef(obj.id)) {
                    el.id = obj.id;
                }

                // if class is defined
                if(isDef(obj.cls)) {
                    el.className = obj.cls;
                }

                // if inner html is defined
                if(isDef(obj.innerHTML)) {
                    el.innerHTML = obj.innerHTML;
                }

                if(isDef(obj.innerText)) {
                    el.innerText = obj.innerText;
                }

                // if src is defined
                if(isDef(obj.src)) {
                    el.src = obj.src;
                }

                if(isDef(obj.style)) {
                    el.style.cssText = obj.style;
                }

                // if clicklable object is defined
                if (isDef(obj.clickable)) {
                    me.onClickEvent = obj.clickable.onClickEvent;
                        el.addEventListener("click",function(e){
                           me.onClickEvent();
                        },false);
                }
            }
            // if not string or object, throw exception
        }
        else{
            throw "Invalid instantiation of Sys.Element, invalid input, needs element string or object";
        }
        if(!sys.isEmpty(obj.renderTo)) {
            if(obj.renderTo === "body"){
             document.getElementsByTagName("body")[0].appendChild(el);   
            }else{
            document.getElementById(obj.renderTo).appendChild(el);
            }
        }

        me.el = el;

        
        this._super( );
    }
});
return gui;
});