/*
 * template-parser.js
 *
 * Distributed under terms of the MIT license.
 */
if (typeof define !== "function") {
    var define = require("amdefine")(module);
}

define("template-parser", [], function(){
  'use strict';
  
    var extractTemplate = function(text) {
       var start = text.indexOf("<template>");
       var end   = text.indexOf("</template>");
       return text.substring(start + 10, end)
         .replace(/([^\\])'/g, "$1\\'")
         .replace(/[\n\r]+/g, "")
         .replace(/ {2,20}/g, " ");
    };


    return {
        extractTemplate: extractTemplate
    };
    
});
/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab : */
