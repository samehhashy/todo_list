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
import placeholderData from "@/data.json";
import User from "@/models/User";

export default {
  components: { TodoForm, TodoList },

  data() {
    return {
      placeholderData
    };
  },

  computed: {
    user() {
      return User.query()
        .with("todos")
        .get();
    }
  },

  created() {
    User.insert({ data: this.placeholderData });
  }
};
</script>
