let app = new Vue({
  el: '#app',
  data: {
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray'
  },
  methods: {
    increment: function() {
      this.count += 1
    }
  }
})