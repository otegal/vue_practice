let myComponent = {
  template: '<p>MyComponent</p>'
}

new Vue({
  el: '#app',
  data: {
    price: 19800,
  },
  filters: {
    localNum: function(val) {
      return val.toLocaleString()
    }
  },
  components: {
    'my-component': myComponent
  }
})