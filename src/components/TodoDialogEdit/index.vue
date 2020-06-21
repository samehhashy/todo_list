<template>
  <app-dialog @close="$emit('close')" :is-active="true" size="md">
    <template>
      <v-container>
        <v-form @submit.prevent="onSubmit">
          <v-row>
            <v-col>
              <v-text-field
                :value="todoItem.title"
                outlined
                label="Edit Item"
                @input="onTitleEdit"
              />
            </v-col>
            <v-col cols="2" class="pt-5">
              <TodoColorPicker
                :current-color="newTodoItem.color"
                @color-pick="onColorPick"
              />
            </v-col>
          </v-row>

          <v-btn depressed type="submit" color="accent" class="ma-2">
            Save
          </v-btn>
          <v-btn depressed color="warning" class="ma-2" @click="close">
            Cancel
          </v-btn>
        </v-form>
      </v-container>
    </template>
  </app-dialog>
</template>

<script>
import AppDialog from "@/components/AppDialog";
import TodoColorPicker from "@/components/TodoColorPicker";
import { mapActions } from "vuex";

export default {
  components: { AppDialog, TodoColorPicker },

  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      newTodoItem: {}
    };
  },

  methods: {
    ...mapActions({ EditTodoItem: "todos/EditItem" }),

    onTitleEdit(newtitle) {
      this.newTodoItem.title = newtitle;
    },

    onColorPick(newColor) {
      this.newTodoItem.color = newColor;
    },

    close() {
      this.$emit("close");
    },

    onSubmit() {
      this.EditTodoItem(this.newTodoItem).then(() => this.close());
    },

    assignItem() {
      this.newTodoItem = { ...this.todoItem };
    }
  },

  created() {
    this.assignItem();
  }
};
</script>
