<template>
  <div>
    <v-slide-y-transition group>
      <TodoItem
        v-for="(item, i) in sortedItems()"
        :key="i"
        :todo-item="item"
        @click:edit="initEdit(item)"
      />
    </v-slide-y-transition>

    <TodoDialogEdit
      :todo-item="editingItem"
      @close="resetEdit"
      v-if="isEditing"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import _sortBy from "lodash/sortBy";

export default {
  components: {
    TodoItem,
    TodoDialogEdit: () => import("@/components/TodoDialogEdit")
  },

  props: {
    todoItems: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      editingItem: {}
    };
  },

  computed: {
    isEditing() {
      return Boolean(Object.entries(this.editingItem).length);
    }
  },

  methods: {
    initEdit(item) {
      this.editingItem = item;
    },

    resetEdit() {
      this.editingItem = {};
    },

    sortedItems() {
      return _sortBy(this.todoItems, "is_done");
    }
  }
};
</script>
