import React from 'react';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/spin'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/message'
import Tabs from './pages/ui/tab'
import gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'

import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component {
    render() {
        return ( <
            HashRouter >
            <
            App >
            <
            Route path = "/login"
            component = {
                Login
            }
            /> <
            Route path = "/admin"
            render = {
                () =>
                <
                Admin >
                <
                Switch >
                <
                Route path = "/admin/ui/buttons"
                component = {
                    Buttons
                }
                /> <
                Route path = "/admin/ui/modals"
                component = {
                    Modals
                }
                /> <
                Route path = "/admin/ui/loadings"
                component = {
                    Loadings
                }
                /> <
                Route path = "/admin/ui/notification"
                component = {
                    Notice
                }
                /> <
                Route path = "/admin/ui/messages"
                component = {
                    Messages
                }
                /> <
                Route path = "/admin/ui/tabs"
                component = {
                    Tabs
                }
                /> <
                Route path = "/admin/ui/gallery"
                component = {
                    gallery
                }
                /> <
                Route path = "/admin/ui/carousel"
                component = {
                    Carousel
                }
                /> <
                Route component = {
                    NoMatch
                }
                /> < /
                Switch > <
                /Admin>
            }
            /> <
            Route path = "/order/detail"
            component = {
                Login
            }
            /> < /
            App > <
            /HashRouter>
        )
    }
}