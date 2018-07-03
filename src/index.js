import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {Route,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'


ReactDOM.render(<LocaleProvider>
    <Provider>
        <Switch>

        </Switch>
    </Provider>
</LocaleProvider>,document.getElementById('root'));