// import Users from '~/assets/data/users.json';
const customData = require('~/assets/data/users.json');

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
        axios.get('/users.json')
            .then(response => {
                console.log(response, 'hi')
                commit('SET_USERS', response.data)
        })
    }
  };