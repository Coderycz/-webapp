import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        showsidebar: true,
        showminilist: true,
    },
    mutations:{
        change(state){
            state.showsidebar= !state.showsidebar
        },
        changemini(state){
            state.showminilist= !state.showminilist
        }
    }
})