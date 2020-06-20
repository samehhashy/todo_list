<template>
  <v-container>
    <div class="todo">
      <TodoForm class="mb-6" />
      <TodoList :todo-items="todoItems" />
    </div>
  </v-container>
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
