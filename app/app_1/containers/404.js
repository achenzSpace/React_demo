import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Icon} from 'antd'

class ErrorPage extends React.Component{
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div style={{padding:'10px',height:'49px',backgroundColor:'#B5B5B5'}}>
                    <div style={{position:'absolute',top:'0',right:'10px',paddingTop:'10px',width:'100%',textAlign:'center',fontSize:'1.5em',color:'#fff'}}>请求错误</div>
                    <div style={{position:'absolute',width:'70px',zIndex:'101'}} onClick={this.backLastPage.bind(this)}>
                        <Icon style={{color:'#fff',fontSize:'1.5em',height:'30px',lineHeight:'30px'}} type='left'/>
                    </div>
                </div>
                <div>
                    页面请求失败
                </div>
            </div>
        )
    }
    backLastPage(){
        window.history.back()
    }
}
export default ErrorPage;