<template>
  <AppDialog :is-active="isActive" size="md" @close="close" title="Add User">
    <v-form @submit.prevent="onUserCreate">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="form.first_name"
            outlined
            label="First Name *"
            :rules="validations"
            validate-on-blur
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="form.last_name"
            outlined
            label="Last Name *"
            :rules="validations"
            validate-on-blur
          />
        </v-col>
        <v-col cols="12" class="d-flex">
          <v-btn
            large
            type="submit"
            depressed
            color="accent"
            :disabled="!isValid"
          >
            Create User
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </AppDialog>
</template>

<script>
import AppDialog from "@/components/AppDialog";
import User from "@/models/User";

export default {
  components: { AppDialog },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      form: {
        first_name: "",
        last_name: ""
      },
      validations: [v => !!v || "This field is required"]
    };
  },

  computed: {
    isValid() {
      return this.form.first_name && this.form.last_name;
    }
  },

  methods: {
    onUserCreate() {
      if (this.isValid) {
        User.insert({ data: this.form });
        this.close();
      }
    },

    close() {
      this.form = { first_name: "", last_name: "" };
      this.$emit("close");
    }
  }
};
</script>
