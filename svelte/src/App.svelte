<script lang="ts">
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from './components/TodoList.svelte';

  export let todos = [];

  function addTodo(e: CustomEvent) {
    todos = [...todos, e.detail];
  }  

  function removeTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id);
  }
</script>

<div>
  <header>
    <h1>To Do: Svelte</h1>
  </header>
  <main>
    <TodoForm on:addTodo="{addTodo}" />
    <TodoList {todos} {removeTodo} />
  </main>
</div>

<style>

</style>
