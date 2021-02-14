import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: frontendData.messages,
        profile: frontendData.profile,
        count: 0
    },
    getters: {
        sortedMessages: state => state.messages.sort((a, b) => -(a.id - b.id))
    },
mutations: {
    addMessageMutation(state, mesage) {

    },
    updateMessageMutation(state, mesage) {

    },
    removeMessageMutation(state, mesage) {

    }
},
    actions: {

    }
})