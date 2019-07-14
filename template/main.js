Vue.component('comp-child', {
  props: ['val'], // propsで受け取るアトリビュート名を指定する
  template: '<p>{{ val }}</p>', // propsで受け取ったvalを利用してテンプレートを作成する。
})

new Vue({
  el: '#app',
  data: {
    message: 'eeesss'
  }
})