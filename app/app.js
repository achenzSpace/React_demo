import React from "react"
import ReactDOM from "react-dom"

import App_01 from './app_1/index'
import CreateStore from './app_1/redux/createStore'
const  store_01 = CreateStore();
import {Provider} from 'react-redux'

class App1 extends React.Component{

    render(){
        return(
            <div>
                <Provider store={store_01}>
                    <App_01 />
                </Provider>
            </div>
        )
    }
}
ReactDOM.render(
    <App1 />,
    document.getElementById('root')
)