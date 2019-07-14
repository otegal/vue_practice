let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
  },
  methods: {
    handleInput: function(event) {
      console.log(event.target.value)
      this.message = event.target.value
    }
  }
})