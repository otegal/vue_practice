Vue.component('comp-child', {
  props: ['name', 'hp'], // propsで受け取るアトリビュート名を指定する
  template: '<li>{{ name }} HP {{ hp }}</li>', // propsで受け取ったvalを利用してテンプレートを作成する。
})

new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 300 },
    ]
  }
})