import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        showsidebar: true
    },
    mutations:{
        change(state){
            state.showsidebar= !state.showsidebar
        }
    }
})