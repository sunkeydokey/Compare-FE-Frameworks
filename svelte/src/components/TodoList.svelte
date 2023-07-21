<script lang="ts">
  import TodoItem from './TodoItem.svelte';

  export let todos = [];
  export let removeTodo: (id:number) => void;
</script>

<ul>
  {#each todos as todo (todo.id)}
    <TodoItem {todo} on:removeTodo="{(e) => removeTodo(e.detail.id)}" />
  {/each}
</ul>
