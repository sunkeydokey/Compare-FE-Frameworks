<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../types/types';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
  },
  emits: ['remove-todo'],
  methods: {
    removeTodo(todo: Todo) {
      this.$emit('remove-todo', todo);
    },
  },
});
</script>
