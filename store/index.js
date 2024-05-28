export const state = () => ({
  informationen: [],
});

export const mutations = {
    setInformationen(state, payload) {
        //order by order key
        payload.sort((a, b) => a.order - b.order);
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
