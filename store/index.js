export const state = () => ({
  informationen: [],
});

export const mutations = {
    setInformationen(state, payload) {
        state.informationen = payload;
    },
};

export const actions = {
    async fetchInformationen({ commit }) {
        const informationen = await this.$content('informationen').fetch();
        commit('setInformationen', informationen);
    },
};


export const getters = {
    fetchInformationen: (state) => parseJSON(state.informationen),
  };
