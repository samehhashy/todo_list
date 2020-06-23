<template>
  <AppDialog :is-active="isActive" size="md" @close="close" title="Delete User">
    <h2 class="mb-6">Are you sure that you want to delete {{ username }}?</h2>
    <div class="text-center my-4">
      <v-btn color="error" large depressed class="mx-2" @click="onUserDelete">
        Yes
      </v-btn>
      <v-btn color="secondary" large depressed class="mx-2" @click="close">
        No
      </v-btn>
    </div>
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
    },
    userId: {
      type: String,
      required: true
    }
  },

  computed: {
    username() {
      if (this.userId) {
        const user = User.find(this.userId);
        return `${user.first_name} ${user.last_name}`;
      } else return "";
    }
  },

  methods: {
    onUserDelete() {
      User.delete(this.userId);
      this.close();
    },

    close() {
      this.$emit("close");
    }
  }
};
</script>
