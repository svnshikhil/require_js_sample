<template>
    <div>
      {{text}}
      <data-table></data-table>
    </div>
</template>

<script>
define(["Vue", "vue!components/table"], function(Vue, table) {
  var result = Vue.extend({
    template: template,
    components: {
      "data-table": table
    },
    data: function() {
      return { text: "Hello from mainFrame" };
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
