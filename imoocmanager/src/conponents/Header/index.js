import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import JsonpAxios from '../../axios'
import CryptoJS from 'crypto-js'
export default class Header extends React.Component{
    state = {}
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount(){
        this.setState({
            userName:'河畔一觉'
        })
        setInterval(()=>{
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        // 封装
        const [ UID, KEY, API, LOCATION ] = [
            "Pfh1Nn8WFIBboUMqw",  // 测试用 用户ID，请更换成您自己的用户ID
            "SMFKaAouVo7N54NEe", // 测试用key，请更换成您自己的 Key
            "https://api.seniverse.com/v3/weather/now.json", // 获取天气实况
            "beijing" // 除拼音外，还可以使用 v3 id、汉语等形式
        ] 
        // 获取当前时间戳
        var ts = Math.floor((new Date()).getTime() / 1000);
        // 构造验证参数字符串
        var str = "ts=" + ts + "&uid=" + UID;
        // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
        // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
        var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
        sig = encodeURIComponent(sig);
        str = str + "&sig=" + sig;
        // 构造最终请求的 url
        var url = API + "?location=" + LOCATION + "&" + str;
        JsonpAxios.jsonp({
            url
        }).then((res)=>{
            console.log(res[0].now);
            this.setState({
                temperature: res[0].now.temperature,
                weather: res[0].now.text
            })
        })
    }

    
    render() {
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        <span>首页</span>
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">
                            {this.state.weather}
                            {this.state.temperature}℃
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}