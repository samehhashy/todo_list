import Vue from "vue";
import Vuex from "vuex";
import { generateId, getIndexById } from "@/utils/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        id: 1,
        title: "Aut sit praesentium rem quo architecto.",
        isDone: false,
        color: "#5ca8e0"
      },
      {
        id: 2,
        title:
          "Perferendis quis repellat temporibus quaerat mollitia nostrum minus aut.",
        isDone: true,
        color: "#5ca8e0"
      },
      {
        id: 3,
        title:
          "Aut enim dolorem provident deleniti ab sunt est odit blanditiis.",
        isDone: false,
        color: "#5ca8e0"
      },
      {
        id: 4,
        title: "Est animi dolor soluta velit illum quos.",
        isDone: true,
        color: "#5ca8e0"
      },
      {
        id: 5,
        title: "Repellendus amet et maxime ullam.",
        isDone: false,
        color: "#5ca8e0"
      }
    ]
  },

  mutations: {
    ADD_TODO_ITEM(state, payload) {
      state.todoItems.unshift(payload);
    },
    REMOVE_TODO_ITEM(state, payload) {
      state.todoItems.splice(payload, 1);
    },
    TOGGLE_DONE_STATE(state, payload) {
      state.todoItems[payload].isDone = !state.todoItems[payload].isDone;
    }
  },

  actions: {
    AddTodoItem({ state, commit }, item) {
      item.isDone = false;
      item.id = generateId(state.todoItems);
      commit("ADD_TODO_ITEM", item);
    },

    RemoveTodoItem({ state, commit }, item) {
      const index = getIndexById(item, state.todoItems);
      commit("REMOVE_TODO_ITEM", index);
    },

    ToggleDoneState({ state, commit }, item) {
      const index = getIndexById(item, state.todoItems);
      commit("TOGGLE_DONE_STATE", index);
    }
  },

  getters: {
    todoItems: state => state.todoItems
  },

  modules: {}
});
