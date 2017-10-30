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
            result: {},                 /* 搜索结果 */
            hist: []
        },  
        songlistheader:{
            cover: 'http://p.qpic.cn/music_cover/6XFhg7ldObzBw37HAkL9Lqz6icmvuH4I2bbg1fTQHVUOQFEK0bT8bgA/600?n=1',
            title: '东京街头霓虹灯下罐装啤酒少女'
        },              /* 选择了哪一个歌单 */
        songlist:{},                    /* 正在播放的歌单 */
        nowplay:{                       /* 正在播放歌曲信息 */
            name: '火星研究院',
            singer: '汪苏泷',
            img: 'http://p.qpic.cn/music_cover/6XFhg7ldObzBw37HAkL9Lqz6icmvuH4I2bbg1fTQHVUOQFEK0bT8bgA/600?n=1',
            id: 0,
            key: 0
        },
        resl:[]                 /* 图片 */



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
        },
        changesonglist(state,b){
            state.songlist = b
        },
        /* 正在播放音乐名 */
        changenowplaysongname(state,b){
            state.nowplay.name = b
        },
        changenowplaysinger(state,b){
            state.nowplay.singer = b
        },
        changenowplayid(state,b){
            state.nowplay.id = b
        },
        changenowplaykey(state,b){
            state.nowplay.key = b
        },
        changenowplayimg(state,b){
            state.nowplay.img = b
        },
        /* 正在播放歌单 */
        nowplaylistcover(state,b){
            state.songlistheader.cover = b
        },
        nowplaylisttitle(state,b){
            state.songlistheader.title = b           
        },
        changeimg(state,b){              /* 图片集合 */
            state.resl.push(b)
        }



    }
})