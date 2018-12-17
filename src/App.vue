<template>
  <div>
    <todo-list v-bind:todos='todos'></todo-list>
    <create-todo v-on:create-todo='addTodo'></create-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo
  },
  methods: {
    addTodo(title, project) {
      this.todos.push({
        id: this.todos.length + 1,
        title,
        project,
        done: false
      });
      console.log(this.todos);
    }
  },
  // data function for the template
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Homework 1',
          project: 'Project A',
          done: false
        },
        {
          id: 2,
          title: 'Homework 2',
          project: 'Project B',
          done: true
        },
        {
          id: 3,
          title: 'Homework 3',
          project: 'Project C',
          done: false
        },
        {
          id: 4,
          title: 'Homework 4',
          project: 'Project D',
          done: false
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
