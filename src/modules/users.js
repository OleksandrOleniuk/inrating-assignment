import { StorageService } from '@/services/StorageService';
import { RandomService } from '@/services/RandomService';

const state = {
  users: StorageService.getArray() || [],
};

const getters = {
  USERS: state => {
    return state.users;
  },
  GET_USER_BY_ID: (state) => (id) => {
    return state.users.find(user => user.id === id);
  }
};

const mutations = {
  IMT_USERS: (state, payload) => {
    Array.prototype.push.apply(state.users, payload);
  },

  ADD_USER: (state, payload) => {
    const stringID = RandomService.getRandomString(10);
    state.users.push(Object.assign({}, payload, { id: stringID }));
  },

  DEL_USER: (state, payload) => {
    state.users.splice(state.users.indexOf(payload), 1);
  },

  UPD_USER: (state, payload) => {
    const index = state.users.findIndex(item => item.id === payload.id);
    if (index !== -1) {
      state.users.splice(index, 1, payload)
    }
  }
};

const actions = {
  SAVE_USER: (context, payload) => {
    context.commit('ADD_USER', payload);
    StorageService.setArray(state.users);
  },

  DELETE_USER: (context, payload) => {
    context.commit('DEL_USER', payload);
    StorageService.setArray(state.users);
  },

  UPDATE_USER: (context, payload) => {
    context.commit('UPD_USER', payload);
    StorageService.setArray(state.users);
  },

  IMPORT_USERS: (context, payload) => {
    context.commit('IMT_USERS', payload);
    StorageService.setArray(state.users);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};