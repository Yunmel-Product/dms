//getters
const getters = {
    uploadList: function(state, getters, rootState) {
        return rootState.uploadList
    }
}

const actions = {
    addFile2Queue: ({ commit }, item) => { commit('ADD_2_QUEUE', item) }
}

export default {
    getters,
    actions
}