<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field
      v-model="form.title"
      label="Add a new item"
      outlined
      rounded
      color="secondary"
      :rules="validations"
      validate-on-blur
    >
      <template #append>
        <TodoColorPicker
          @color-pick="handleColorPick"
          :current-color="form.color || undefined"
        />

        <v-btn
          fab
          depressed
          small
          color="accent"
          @click="onSubmit"
          :disabled="!isValid"
        >
          <v-icon size="28">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </v-form>
</template>

<script>
import TodoColorPicker from "@/components/TodoColorPicker";
import { mapActions } from "vuex";

export default {
  components: { TodoColorPicker },

  data() {
    return {
      form: {
        title: "",
        color: "#" + this.$vuetify.theme.themes.light.secondary
      },
      validations: [
        v => !!v || "Cannot be empty",
        v => v.length <= 100 || "Cannot be more than 100 characters"
      ]
    };
  },

  computed: {
    isValid() {
      const value = this.form.title.length;
      return value && value <= 100;
    }
  },

  methods: {
    ...mapActions({ AddTodoItem: "todos/AddItem" }),

    onSubmit() {
      if (this.isValid) {
        this.AddTodoItem({ ...this.form });
        this.resetForm();
      }
    },

    resetForm() {
      this.form.title = "";
    },

    handleColorPick(color) {
      this.form.color = color;
    }
  }
};
</script>
