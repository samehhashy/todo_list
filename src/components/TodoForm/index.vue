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
        <AppColorPicker @color-pick="handleColorPick">
          <template>
            <v-btn
              fab
              depressed
              x-small
              dark
              :color="form.color"
              class="mx-2 mt-1"
            >
              <v-icon size="20">mdi-palette</v-icon>
            </v-btn>
          </template>
        </AppColorPicker>

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
import AppColorPicker from "@/components/AppColorPicker";
import { mapActions } from "vuex";

export default {
  components: { AppColorPicker },

  data() {
    return {
      form: {
        title: "",
        color: this.$vuetify.theme.themes.light.secondary // default
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
    ...mapActions(["AddTodoItem"]),

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
