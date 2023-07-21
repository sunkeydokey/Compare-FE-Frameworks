<script lang="ts">
  export let todo: {
    id: number;
    content: string;
  };
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function requestRemoveTodo() {
    dispatch('removeTodo', todo);
  }
</script>

<article>
  <span>{todo.content}</span>
  <button on:click="{requestRemoveTodo}">Delete</button>
</article>
