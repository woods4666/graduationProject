import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux'

/*ROUTES*/
import UserCenter from './routes/UserCenter'

ReactDOM.render(<Provider>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <Switch>

            </Switch>
        </LocaleProvider>

    </HashRouter>
</Provider>,document.getElementById('root'));