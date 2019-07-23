Vue.component('comp-child', {
  // props: ['name', 'hp'],
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function() {
      this.$emit('childs-event')
    }
  }
})

new Vue({
  el: '#app',
  methods: {
    parentsMethod: function() {
      alert('イベントをキャッチ')
    }
  }
})