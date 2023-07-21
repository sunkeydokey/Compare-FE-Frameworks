<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let newTodo = '';
  const dispatch = createEventDispatcher();

  function addTodo(e: Event) {
    e.preventDefault(); // 폼 기본 동작을 막습니다.
    if (!newTodo.trim()) return;
    dispatch('addTodo', {
      id: Date.now(),
      content: newTodo,
    });
    newTodo = '';
  }
</script>

<form on:submit="{addTodo}">
  <input type="text" bind:value="{newTodo}" />
  <button type="submit">Add</button>
</form>
