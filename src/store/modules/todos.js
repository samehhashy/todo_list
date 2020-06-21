import { generateId, getIndexById } from "@/utils/helpers";

const state = {
  items: [
    // {
    //   id: "hzx49pn4x",
    //   title: "Aut sit praesentium rem quo architecto.",
    //   isDone: false,
    //   color: "#5ca8e0"
    // },
    // {
    //   id: "4fkyuibtd",
    //   title:
    //     "Perferendis quis repellat temporibus quaerat mollitia nostrum minus aut.",
    //   isDone: true,
    //   color: "#5ca8e0"
    // },
    // {
    //   id: "k61hr2hbc",
    //   title: "Aut enim dolorem provident deleniti ab sunt est odit blanditiis.",
    //   isDone: false,
    //   color: "#5ca8e0"
    // },
    // {
    //   id: "h00d6bbxj",
    //   title: "Est animi dolor soluta velit illum quos.",
    //   isDone: true,
    //   color: "#5ca8e0"
    // },
    // {
    //   id: "l5j38gaq6",
    //   title: "Repellendus amet et maxime ullam.",
    //   isDone: false,
    //   color: "#5ca8e0"
    // }
  ]
};

const mutations = {
  ADD_ITEM(state, payload) {
    state.items.unshift(payload);
  },
  REMOVE_ITEM(state, payload) {
    state.items.splice(payload, 1);
  },
  TOGGLE_DONE_STATE(state, payload) {
    state.items[payload].isDone = !state.items[payload].isDone;
  },
  EDIT_ITEM(state, payload) {
    state.items[payload.index] = payload.item;
  }
};

const actions = {
  AddItem({ state, commit }, item) {
    item.isDone = false;
    item.id = generateId(state.items);
    commit("ADD_ITEM", item);
  },

  RemoveItem({ state, commit }, item) {
    const index = getIndexById(item, state.items);
    commit("REMOVE_ITEM", index);
  },

  ToggleDoneState({ state, commit }, item) {
    const index = getIndexById(item, state.items);
    commit("TOGGLE_DONE_STATE", index);
  },

  EditItem({ state, commit }, item) {
    return new Promise(resolve => {
      const index = getIndexById(item, state.items);
      commit("EDIT_ITEM", { item, index });
      resolve();
    });
  }
};

const getters = {
  items: state => state.items
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
