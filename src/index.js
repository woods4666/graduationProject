import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux'
import store from './store'
import './static/css/reset.min.css'
import './static/css/common.less'
import Nav from './component/NavBottom';
import Head from './component/NavTop'
import Home from "./routes/Home";
import All from "./routes/All";
import Stroll from "./routes/Stroll";
import Cart from "./routes/Cart";
import UserCenter from "./routes/UserCenter";
import UserOrder from './routes/userCenter/UserOrder'
import LoginRegisterBase from "./routes/LoginRegisterBase";
import Search from './routes/Search'
import Detail from './routes/Detail';


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
           <div>
               <Head/>
               <main className={'container'}>
                   <Switch>
                       <Route path={'/home'} component={Home}/>
                       <Route path={'/all'} component={All}/>
                       <Route path={'/stroll'} component={Stroll}/>
                       <Route path={'/cart'} component={Cart}/>
                       <Route path={'/usercenter'} exact component={UserCenter}/>
                       <Route path={'/usercenter/userorder'} component={UserOrder}/>
                       <Route path={'/usercenter'} component={UserCenter}/>
                       <Route path={'/login'} component={LoginRegisterBase}/>
                       <Route path={'/register'} component={LoginRegisterBase}/>
                       <Route path={'/search/:value/:sort'} component={Search}/>
                       <Route path={'/detail/:category/:id'} component={Detail}></Route>
                       <Redirect to={'/home'}/>
                   </Switch>
               </main>
               <Nav/>
           </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);