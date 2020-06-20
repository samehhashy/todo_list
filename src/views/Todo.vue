<template>
  <v-container fluid class="fill-height">
    <v-row align="center" align-content="center" justify="center">
      <Todo />
    </v-row>
  </v-container>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: "Home",

  components: { Todo }
};
</script>
