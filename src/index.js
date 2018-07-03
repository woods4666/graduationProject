import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux'
import store from './store'
import './static/css/reset.min.css'
import './static/css/common.less'
import Nav from './component/Nav';
ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
           <div>
               <Nav/>
           </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);