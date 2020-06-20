<template>
  <div>
    <TodoItem v-for="(item, i) in sortedItems" :key="i" :todo-item="item" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import _sortBy from "lodash/sortBy";

export default {
  components: { TodoItem },

  props: {
    todoItems: {
      type: Array,
      required: true
    }
  },

  computed: {
    sortedItems() {
      return _sortBy(this.todoItems, "isDone");
    }
  }
};
</script>
