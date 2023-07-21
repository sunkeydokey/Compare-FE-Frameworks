<template>
  <article>
    <span>{{ todo.todo }}</span>
    <button @click="removeTodo">Delete</button>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../types/types';

export default defineComponent({
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },
  emits: ['remove-todo'],
  methods: {
    removeTodo() {
      this.$emit('remove-todo', this.todo);
    },
  },
});
</script>
