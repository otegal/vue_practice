Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val']
})

new Vue({
  el: '#app',
  data: {
    valueA: 'これは子A',
    valueB: 'これは子B'
  }
})