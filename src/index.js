import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux'
import All from "./routes/All";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Stroll from "./routes/Stroll";
import UserCenter from "./routes/UserCenter";
import store from './store'
ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/cart'} component={Cart}/>
                <Route path={'/all'} component={All}/>
                <Route path={'/stroll'} component={Stroll}/>
                <Route path={'/usercenter'} component={UserCenter}/>
                <Redirect to={'/'}/>
            </Switch>
        </LocaleProvider>
    </HashRouter>
</Provider>,document.getElementById('root'));