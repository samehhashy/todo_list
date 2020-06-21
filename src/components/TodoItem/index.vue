<template>
  <div class="todo-item">
    <v-hover>
      <template v-slot="{ hover }">
        <v-card :elevation="hover ? 10 : 0" outlined color="light">
          <div
            class="todo-item__color-label"
            :style="`backgroundColor: ${todoItem.color}`"
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
                    class="todo-item__actions__btn"
                    :color="todoItem.isDone ? 'accent' : 'disabled'"
                    fab
                    x-small
                    depressed
                    @click="toggleDoneState"
                  >
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                  <v-btn
                    class="todo-item__actions__btn"
                    color="secondary"
                    fab
                    x-small
                    depressed
                    @click="editItem"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    class="todo-item__actions__btn"
                    color="error"
                    fab
                    x-small
                    depressed
                    @click="removeItem"
                  >
                    <v-icon>mdi-close</v-icon>
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
import { mapActions } from "vuex";

export default {
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions(["RemoveTodoItem", "ToggleDoneState"]),

    removeItem() {
      this.RemoveTodoItem(this.todoItem);
    },

    toggleDoneState() {
      this.ToggleDoneState(this.todoItem);
    },

    editItem() {
      this.$emit("click:edit");
    }
  }
};
</script>
