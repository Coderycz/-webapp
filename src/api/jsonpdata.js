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














