let app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: "スライム", hp: 100},
      { id: 2, name: "ゴブリン", hp: 200},
      { id: 3, name: "ドラゴン", hp: 500},
    ]
  },
  methods: {
    doAdd: function() {
      // list内でもっとも大きいidを取得
      let max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name, // this.nameは現在のフォームの入力値
        hp: 500
      })
    },
    doRemove: function(index) {
      this.list.splice(index, 1)
    },
  }
})