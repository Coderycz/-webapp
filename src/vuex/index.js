import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        showsidebar: true,              /* 显示左侧导航 */
        showminilist: true,             /* 显示底部迷你菜单 */
        isplay:false,                   /* 是否正在播放 */
        playtime: 0,                    /* 以播放时长 */

    },
    mutations:{
        change(state){
            state.showsidebar= !state.showsidebar
        },
        changemini(state){
            state.showminilist= !state.showminilist
        },
        changeplay(state){
            state.isplay= !state.isplay
        },
        changetime(state,b){
            state.playtime = b
        }


    }
})