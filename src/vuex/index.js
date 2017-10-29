import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        witch: 1,
        showsidebar: true,              /* 显示左侧导航 */
        showminilist: true,             /* 显示底部迷你菜单 */
        isplay:false,                   /* 是否正在播放 */
        playtime: 0,                    /* 以播放时长 */
        duration: 0,                    /* 总时长 */
        volume: 1,
        typenum: 0,                     /* 播放类型 */
        dissid: 0,                      /* 歌单id */   
        type : ["icon-suijibofang","icon-liebiaoxunhuan","icon-danquxunhuan"],
        describing: ["随机播放","列表循环","单曲循环"],
        search: {
            result: {},
            hist: []
        }


    },
    mutations:{
        witchone(state,b){
            state.witch = b
        },
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
        },
        changevolume(state,b){
            state.volume = b
        },
        changedissid(state,b){
            state.dissid = b
        },
        changesearch(state,b){
            state.search.result = b
        },
        changehist(state,b){
            state.search.hist = b
        }


    }
})