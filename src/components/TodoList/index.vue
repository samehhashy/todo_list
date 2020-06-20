<template>
  <div>
    <TodoItem v-for="(item, i) in todoItems" :key="i" :todo-item="item" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: { TodoItem },

  props: {
    todoItems: {
      type: Array,
      required: true
    }
  }
};
</script>
