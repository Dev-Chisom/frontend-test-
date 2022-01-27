export const state = () => ({
    users: []
  });
  
  export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    }

  };

  export const actions = {
    getUsers({ commit }) {
        this.$axios.$get('/users.json')
            .then(response => {
                commit('SET_USERS', response)
        })
    }
  };