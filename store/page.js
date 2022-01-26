
export const state = () => ({
  showPageSidebar: false,
});

export const mutations = {
  setShowPageSidebar (state, showPageSidebar) {
    state.showPageSidebar = showPageSidebar;
  }
};

export const actions = {
  openPageSidebar ({ commit }) {
    commit('setShowPageSidebar', true);
  },
  closePageSidebar ({ commit }) {
    commit('setShowPageSidebar', false);
  },
  togglePageSidebar ({ commit, rootState }) {
    const { page } = rootState;
    const { showPageSidebar } = page;
    commit('setShowPageSidebar', !showPageSidebar);
  },
};

export const getters = {
  showPageSidebar: (state) => {
    return state.showPageSidebar;
  }
};
