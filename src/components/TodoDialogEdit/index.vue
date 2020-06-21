<template>
  <app-dialog @close="$emit('close')" :is-active="true" size="md">
    <template>
      <v-container>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            :value="todoItem.title"
            outlined
            label="Edit Item"
            @input="onTitleEdit"
          />
          <v-btn depressed type="submit" color="accent">Save</v-btn>
        </v-form>
      </v-container>
    </template>
  </app-dialog>
</template>

<script>
import AppDialog from "@/components/AppDialog";
import { mapActions } from "vuex";

export default {
  components: { AppDialog },

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
    ...mapActions(["EditTodoItem"]),

    onTitleEdit(newtitle) {
      this.newTodoItem.title = newtitle;
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
