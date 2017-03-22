import Vue from 'vue'
import Vuex from 'vuex'
import uploadLists from './modules/uploadLists'

Vue.use(Vuex)

const state = {
    uploadList: []
}

const getters = {

}

const mutations = {
    SET_UPLOAD_LIST(state, items) {
        state.uploadList = items
    },
    ADD_2_QUEUE(state, obj) {
        state.uploadList.push(obj)
    },
    UPDATE_PROCESS(state) {
        state.uploadList.forEach(function(item, index) {
            if (item.process < 100) {
                item.process += 1;
            }
        });
    },
    DELETE_FILE(state, id) {
        let delIndex;
        state.uploadList.forEach(function(item, index) {
            if (item.id == id) {
                delIndex = index;
                return;
            }
        });
        if (delIndex) {
            state.uploadList.splice(delIndex, 1);
        }
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