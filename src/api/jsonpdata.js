/* import jsonp from 'common/js/jsonp'
import { commonparams,options } from './config'
import axios from 'axios'

export function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
    const data = Object.assign({}, {}, {
        g_tk: 281755230,
        format: "jsonp"
    })

    return jsonp(url, data, options)
}

export function getclund(){
    const url = '/api/getclund'
    const data = {
        csrf_token:'fad033cf81371d25ddf48fb5069b370f'
    }   
    return axios.get(url,{
        params: data
    }).then((res)=>{
        res.Promise.resolve(res.data)
    })
}

export function getDistList() {
    const url = '/api/getDistList' 
    const data = Object.assign({}, {}, {
        g_tk: 1928093487,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'jsonp',
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
    return axios.get(url, {
        params: data
      }).then((res) => {
        return Promise.resolve(res.data)
      })
    } */

    import jsonp from 'common/js/jsonp'
    import {commonParams, options} from './config'
    import axios from 'axios'
    
    export function getRecommend() {
      const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    
      const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
      })
    
      return jsonp(url, data, options)
    }
    
    export function getDiscList() {
      const url = '/api/getDiscList'
    
      const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
      })
   
      return axios.get(url, {
        params: data
      }).then((res) => {
        return Promise.resolve(res.data)
      })
    }


    export function gethot() {
      const url = '/api/gethot'
    
      const data =  commonParams
   
      return axios.get(url, {
        params: data
      }).then((res) => {
        return Promise.resolve(res.data)
      })
    }

    export function getSongList(disstid) {
      const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    
      const data = Object.assign({}, commonParams, {
        disstid,
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0
      })
    
      return jsonp(url, data, options)
    }
    /* 个人信息 */
    export function getperson() {
      /* 
      https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=676735114&jsonpCallback=hotSearchKeysmod_top_search&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0 */
      const url = 'https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg?g_tk=676735114&jsonpCallback=jcb&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205360838&ct=20&userid=1101508554&reqfrom=1&reqtype=0'
      //var data = ''
      //return jsonp(url, data, options)
      return axios.get(url).then((res) => { 
        var s = res.data.replace(/(^jcb\()/g,'').replace(/\)\s+$/g,'')
        var obj = JSON.parse(s)
        return Promise.resolve(obj.data)
      })
    }
  /*   export function gethot() {
      const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=hotSearchKeysmod_top_search&g_tk=676735114&jsonpCallback=recom11710349407046405&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A1%7D%7D%7D'
      var data="";
      return jsonp(url, data, options)
    }
    export function getperson1() {
      const url = 'https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg?g_tk=676735114&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205360838&ct=20&userid=1101508554&reqfrom=1&reqtype=0'  
      var data = ''  
      return jsonp(url, data, options)
    } */













