import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//header
import HomeHeader from '../../components/back/header/home'

// connect  
import {connect} from 'react-redux'

//轮播图
import Carousel from '../../components/home/carousel/carousel'
//广告
import Ad from './subPage/Ad'
//list
import List from './subPage/List'

class HomePage extends React.Component{
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={

        }
    }
    render(){
        console.log('city:',this.props.city.name)
        return (
            <div style={{maxWidth:'960px',margin:'auto'}}>
                <HomeHeader cityName={this.props.city.name} />
                <Carousel />
                <div style={{height:'2px'}} />
                <Ad />
                <div style={{height:'5px'}} />
                <List cityName={this.props.city.name}/>
            </div>
        )
    }
}

function mapStoreToProps(state) {
    return{
        city:state.CityReduxData
    }
}
function mapDispatchToProps(dispatch) {
    return{
    }
}
export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(HomePage);