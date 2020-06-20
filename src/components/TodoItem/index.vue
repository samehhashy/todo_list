<template>
  <div class="todo-item">
    <v-hover>
      <template v-slot="{ hover }">
        <v-card :elevation="hover ? 10 : 0" outlined color="light">
          <div
            class="todo-item__color-label"
            :style="`color: ${todoItem.color}`"
          />
          <v-container fluid>
            <v-row no-gutters justify="space-between">
              <v-col class="d-flex align-center">
                <h1
                  class="todo-item__title"
                  v-text="todoItem.title"
                  :class="{ 'todo-item--is-done': todoItem.isDone }"
                />
              </v-col>

              <v-col cols="5" sm="3" class="d-flex align-center justify-end">
                <div class="todo-item__actions">
                  <v-btn
                    v-for="(action, i) in actions"
                    :key="i"
                    class="todo-item__actions__btn"
                    :color="action.color"
                    fab
                    x-small
                    depressed
                  >
                    <v-icon>mdi-{{ action.icon }}</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      actions: [
        {
          color: this.todoItem.isDone ? "accent" : "disabled",
          icon: "check"
        },
        {
          color: "warning",
          icon: "pencil"
        },
        {
          color: "error",
          icon: "close"
        }
      ]
    };
  }
};
</script>
