function initialState() {
  return {
    list: [
      {
        id: 1,
        title: 'z',
        description: 'wert',
      },
      {
        id: 2,
        title: 'y',
        description: 'rtyu',
      },
      {
        id: 3,
        title: 'x',
        description: 'yuio',
      },
    ],
    lastId: 3,
    loading: false,
  };
}

const getters = {
  getList: (state) => state.list,
  getLoadingState: (state) => state.loading,
};

const mutations = {
  addTask: (state, { title, description }) => {
    state.lastId += 1;
    state.list.push({
      id: state.lastId,
      title,
      description,
    });
  },
  removeTasks: (state, { ids }) => {
    state.list = state.list.filter((task) => !ids.includes(task.id));
  },
};

async function getTasks() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

const actions = {
  actionLoadTasks: async ({ state }) => {
    state.loading = true;
    await getTasks();
    state.loading = false;
  },
  actionAddTask: ({ commit }, payload) => {
    commit('addTask', payload);
  },
  actionRemoveTasks: ({ commit }, payload) => {
    commit('removeTasks', payload);
  },
};

const state = {
  ...initialState(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
