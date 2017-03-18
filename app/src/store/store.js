import Vue from 'vue'
import Vuex from 'vuex'
import uploadLists from './modules/uploadLists'

Vue.use(Vuex)

const state = {
    uploadList: []
}

const getters = {
    // uploadList: state => {
    //     let items = new Array()
    //     items.push({ name: 'admin', email: 'admin@gmail.com' });
    //     items.push({ name: 'as', email: 'admin@gmail.com' });
    //     items.push({ name: 'sdds', email: 'admin@gmail.com' });
    //     store.commit('SET_UPLOAD_LIST', items)
    //     return state.uploadList
    // }
}

const mutations = {
    SET_UPLOAD_LIST(state, items) {
        state.uploadList = items
    },
    ADD_2_QUEUE(state, obj) {
        state.uploadList.push(obj)
        console.log(state.uploadList.length)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    modules: {
        uploadLists
    }
})
export default store