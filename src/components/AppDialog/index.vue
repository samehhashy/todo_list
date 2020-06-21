<template>
  <v-dialog @click:outside="close" :max-width="maxWidth" :value="isActive">
    <v-card>
      <BtnClose @close="close" />
      <slot />
    </v-card>
  </v-dialog>
</template>

<script>
import BtnClose from "@/components/AppBtnClose";

export default {
  components: { BtnClose },

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "sm",
      validator: val => ["sm", "md", "lg"].indexOf(val) !== -1
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  },

  computed: {
    maxWidth() {
      switch (this.size) {
        case "md":
          return 600;
        case "lg":
          return 960;
        default:
          return 325; // a.k.a "sm"
      }
    }
  }
};
</script>
