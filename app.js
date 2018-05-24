/* global requirejs, require */
/**
 * app.js
 *
 * Distributed under terms of the MIT license.
 */

requirejs.config({
    paths: {
        "Vue": "https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue",
        "vue": ["require-vuejs", "https://rawgit.com/edgardleal/require-vuejs/master/dist/require-vuejs"],
    },
    shim: {
        "Vue": {"exports": "Vue"}
    }
});

require(["Vue", "vue!component"], function(Vue){
    new Vue({
        el: "#app"
    });
});
