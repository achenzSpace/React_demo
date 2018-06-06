import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// antd 组件
import {Select,Input,Button} from 'antd'
// 存储
import LocalStore from '../../utils/localStorage'
import {CITYNAME} from '../../config/config'

// header样式
import './headerStly.css'

class Header extends React.Component{
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {

        }
    }
    // 地址选择
    handleChange(val){
        LocalStore.setItem(CITYNAME,val)
    }
    //搜索
    handleSearch(val){
        console.log('搜索')
        console.log(val);
    }
    render(){
        return (
            <div className='header'>
                <Select defaultValue={this.props.cityName} className='select' onChange={this.handleChange.bind(this)}>
                    <Select.Option value="长沙">长沙</Select.Option>
                    <Select.Option value="北京">北京</Select.Option>
                    <Select.Option value="上海">上海</Select.Option>
                    <Select.Option value="广州">广州</Select.Option>
                    <Select.Option value="重庆">重庆</Select.Option>
                    <Select.Option value="武汉">武汉</Select.Option>
                </Select>
                <Input.Search placeholder='搜索物品名' className="search" enterButton onSearch={this.handleSearch.bind(this)}/>
                <Button  icon="user" className='user-button' shape="circle" />
            </div>
        )
    }
}
export default Header;