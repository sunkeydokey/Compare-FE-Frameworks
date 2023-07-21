//src/components/TodoInput.vue
<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from '../types/types';

export default defineComponent({
  emits: ['add-todo'],
  setup(_, { emit }) {
    const newTodo = ref('');

    const addTodo = () => {
      if (!newTodo.value.trim()) return;
      const todo: Todo = {
        id: Date.now(),
        todo: newTodo.value,
      };
      newTodo.value = '';
      emit('add-todo', todo);
    };

    return { newTodo, addTodo };
  },
});
</script>
