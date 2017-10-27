import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        showsidebar: true,              /* 显示左侧导航 */
        showminilist: true,             /* 显示底部迷你菜单 */
        isplay:false,                   /* 是否正在播放 */
        playtime: 0,                    /* 以播放时长 */
        duration: 0,                    /* 总时长 */
        typenum: 0,
        type : ["icon-suijibofang","icon-liebiaoxunhuan","icon-danquxunhuan"],
        describing: ["随机播放","列表循环","单曲循环"],

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
        },
        getsumtime(state,b){
            state.duration = b
        },
        changetype(state){
            state.typenum++;
            state.typenum= state.typenum>2 ? 0 : state.typenum
        }


    }
})