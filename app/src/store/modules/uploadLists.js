//getters
const getters = {
    uploadList: function(state, getters, rootState) {
        return rootState.uploadList
    }
}

const actions = {
    addFile2Queue: ({ commit }, item) => { commit('ADD_2_QUEUE', item) },
    updateProcess: ({ commit }) => { commit('UPDATE_PROCESS') },
    deleteFile: ({ commit }, id) => { commit('DELETE_FILE', id) }
}

export default {
    getters,
    actions
}