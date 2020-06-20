<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field
      v-model="form.title"
      label="Add a new item"
      outlined
      rounded
      color="secondary"
      :rules="validations"
      :validate-on-blur="false"
    >
      <template #append>
        <AppColorPicker @color-pick="handleColorPick">
          <template>
            <v-btn fab depressed x-small color="secondary" class="mx-2 mt-1">
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

export default {
  components: { AppColorPicker },

  data() {
    return {
      form: {
        title: "",
        color: ""
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
    onSubmit(newItem) {
      if (this.isValid) {
        console.log("onSubmit -> newItem", newItem);
      }
      this.resetForm();
    },

    resetForm() {
      this.form = {
        title: "",
        color: ""
      };
    },

    handleColorPick(color) {
      this.form.color = color;
    }
  }
};
</script>
