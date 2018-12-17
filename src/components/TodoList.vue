<template>
  <div>
    <h1 class="ui block header">Task Rabbit</h1>
    <div class="ui large horizontal divided list">
      <p class="item">Total tasks: {{todos.length}}</p>
      <p class="item">Completed: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p class="item">Pending: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    </div>
    <div class="ui three cards">
      <todo
        v-on:delete-todo="deleteTodo"
        v-on:complete-todo="completeTodo"
        v-for="todo in todos"
        :key="todo.id"
        v-bind:todo="todo"
      ></todo>
    </div>
  </div>
</template> 
<script>
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo (todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
    }
  }
};
</script>

<style>
.ui.divided.horizontal.list {
  margin-left: 1em;
}

.ui.three.cards {
  padding: 1em;
}
</style>