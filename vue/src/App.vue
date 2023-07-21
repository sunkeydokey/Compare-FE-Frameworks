<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from './types/types';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    const todos = ref<Todo[]>([]);

    const addTodo = (todo: Todo) => {
      todos.value.push(todo);
    };

    const removeTodo = (todo: Todo) => {
      todos.value = todos.value.filter((t) => t.id !== todo.id);
    };

    return { todos, addTodo, removeTodo };
  },
});
</script>

<template>
  <header>
    <h1>To Do: Vue</h1>
  </header>
  <main>
    <TodoForm @add-todo="addTodo" />
    <TodoList :todos="todos" @remove-todo="removeTodo" />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
