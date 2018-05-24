<template>
    <div>
        {{text}}
        <main-app></main-app>
        </div>
</template>

<script>
define(["Vue", "vue!components/mainFrame"], function(Vue, mainFrame) {
  var result = Vue.extend({
    components: {
      "main-app": mainFrame
    },
    template: template,
    data: function() {
      return { text: "Ok from component.vue" };
    }
  });

  Vue.component("my-component", result); // register to be used

  // return to be used in unit tests
  return result;
});
</script>

<style>
div {
  border: 1px solid;
}
</style>
/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 noexpandtab : */
