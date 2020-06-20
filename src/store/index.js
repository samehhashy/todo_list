import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        title: "Aut sit praesentium rem quo architecto.",
        isDone: false,
        color: "#5ca8e0"
      },
      {
        title:
          "Perferendis quis repellat temporibus quaerat mollitia nostrum minus aut.",
        isDone: false,
        color: "#5ca8e0"
      },
      {
        title:
          "Aut enim dolorem provident deleniti ab sunt est odit blanditiis.",
        isDone: false,
        color: "#5ca8e0"
      },
      {
        title: "Est animi dolor soluta velit illum quos.",
        isDone: true,
        color: "#5ca8e0"
      },
      {
        title: "Repellendus amet et maxime ullam.",
        isDone: false,
        color: "#5ca8e0"
      }
    ]
  },

  mutations: {},

  actions: {},

  getters: {
    todoItems: state => state.todoItems
  },

  modules: {}
});
