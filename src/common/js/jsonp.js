import originJSONP from "jsonp"

export default function jsonp(url, data, option) {
    //若url末尾有？则后面的data加&，没有就加？
    url +=(url.indexOf("?")< 0 ? "?":"&")+param(data)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) =>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}
//将传过来的字符串拼接起来
function param(data){
    let url = "";
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : ""
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1):""
}







