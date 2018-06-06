import React from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin';
// pages
import Home from './containers/home/index'
import ErrorPage from './containers/404'

// loaclstore
import LoaclStore from './utils/localStorage'
// config
import {CITYNAME,LOGIN} from "./config/config";

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as action from './redux/action'
// city
import City from './containers/city/city'
//search
import Search from './containers/search/search'

// Login page
import LoginPage from './containers/login/login'
// userInfo Page
import UserInfoPage from './containers/login/userInfo'
//List Info
import ListInfo from './containers/listInfo/listinfo'
//城市选择界面 滑动组件自封装
import ScrollTo from './containers/city/scrollTo/scrollTo'
class IndexPath extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            hashPage:false
        }
    }
    render(){
        return (
            this.state.hashPage
                ? <div>
                    <HashRouter>
                        <Switch >
                            <Route path='/' exact component={Home}/>
                            <Route path='/city' exact component={City}/>
                            <Route path='/search/:container/:name?' component={Search} />
                            <Route path='/Login' component={LoginPage}/>
                            <Route path='/UserInfo' component={UserInfoPage}/>
                            <Route path='/ListInfo' component={ListInfo}/>
                            {/*{滑动组件界面}*/}
                            <Route path='/ScrollTo' component={ScrollTo}/>
                            {/*滑动组件结束标志*/}
                            <Route path='*' component={ErrorPage} />
                        </Switch>
                    </HashRouter>
                </div>
                : <div>加载中...</div>
        )
    }
    componentWillMount(){
    //    内容加载完毕前
    }
    componentDidMount(){
    //    内容加载完毕
        var cityName = LoaclStore.getItem(CITYNAME);
        var isLogin = LoaclStore.getItem(LOGIN);
        /**
         *   补充：  === 表示全等，即类型与值必须相等，建议都用===； == 表示内容相等，会有一个类型的转换，例如 name==null 结果是：name === undefined跟name=== null
         * */
        if (cityName == null){
            cityName = '深圳1';
        }
        this.props.actionFun.City({   // 触发变化
            name:cityName
        });
        if (isLogin == null){
            isLogin = false;
        }
        this.props.actionFun.Login({   // 触发变化
            isLogin:isLogin
        });
         setTimeout(()=>{

        /**
         *    箭头函数：  es6 规则， 使用this时this代表的是父组件的内容，在es6之前this会指向windows对象。
         * */
            this.setState({
                hashPage:true
            })
         },3000);
    }
}
function mapStoreToProps(state) {
    return{
    }
}
function mapDispatchToProps(dispatch) {
    return{
        actionFun:bindActionCreators(action,dispatch)
    }
}
export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(IndexPath);