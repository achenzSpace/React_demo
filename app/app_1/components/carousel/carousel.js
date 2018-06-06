import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Carousel,Button} from 'antd'
import './carousel.css'

import {Link} from 'react-router-dom'

class CarouselView extends React.Component{
    constructor(){
        super();
        this.shouldConponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        }
    }
    changePage(){

    }
    render(){
        const btn= [];
        const name = ['湘粤菜','APS','西餐','婚介','培训','购票','烧烤','家装','宠物','更多'];

        return (
            <div>
                <Carousel className='carousel-style' afterChange={this.changePage.bind(this)} >
                    <div>
                        <div className='carousel-zyc'>
                            {name.map(function (item,index) {
                                return <li className='carousel-btn' key={index}>
                                    <Link to={'*'}>
                                        <div className='img-carousel' />
                                        <div className='img-carousel-label'>{item}</div>
                                        </Link>
                                </li>
                            })}
                        </div>
                        {/*<img src="../../Libs/img/Logo.png" alt="图标"/>*/}
                    </div>
                    <div>
                        <div className='carousel-zyc'>
                            {name.map(function (item,index) {
                                return <li className='carousel-btn' key={index}>
                                    <Link to={'*'}>
                                        <div className='img-carousel' />
                                        <div className='img-carousel-label'>{item}</div>
                                    </Link>
                                </li>
                            })}
                        </div>
                        {/*<img src="../../Libs/img/Logo.png" alt="图标"/>*/}
                    </div>
                    <div>
                        <div className='carousel-zyc'>
                            {name.map(function (item,index) {
                                return <li className='carousel-btn' key={index}>
                                    <Link to={'*'}>
                                        <div className='img-carousel' />
                                        <div className='img-carousel-label'>{item}</div>
                                    </Link>
                                </li>
                            })}
                        </div>
                        {/*<img src="../../Libs/img/Logo.png" alt="图标"/>*/}
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default CarouselView;
