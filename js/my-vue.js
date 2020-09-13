var app = new Vue({
  el: "#app",
  data: {
    message: "hello world!!aaasdfaa",
    count: 0,
    user: {
      lastName: "Iwata",
      firstname: "Akihiro",
      prefecture: "Ehime"
    },
    colors: ["red", "green", "blue"]
  }
});

var todo = new Vue({
  el: "#todo",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function(event) {
      // alert();
      // 未入力の場合は追加しない
      if (this.newItem == "") return;

      var todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      // 入力欄初期化
      this.newItem = "";
    }
  }
});
