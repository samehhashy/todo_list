import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import todos from "./modules/todos";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "todos",
  reducer: state => ({
    todos: { items: state.todos.items }
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { todos },
  plugins: [vuexLocal.plugin]
});
