<template>
  <div class="todo">
    <v-container>
      <TodoForm class="mb-6" />
      <TodoList :todo-items="todoItems" />
    </v-container>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { mapGetters } from "vuex";

export default {
  components: { TodoForm, TodoList },

  computed: {
    ...mapGetters(["todoItems"])
  }
};
</script>
