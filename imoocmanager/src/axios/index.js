import JsonP from 'jsonp';

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback',
                timeout:60000
            },function(err,response){
                const results = response.results;
                if(results){
                    resolve(results)
                }else{
                    reject('error')
                }
            })
        })
    }
}