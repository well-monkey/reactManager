import React from 'react';
import { HashRouter as Router, Route,Switch } from 'react-router-dom'
import Main from './Main'
import Info from './Info'
import About from '../route1/About'
import Topic from '../route1/Topic'
import Home from './Home';
import NoMatch from './NoMatch'

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path='/home' render={()=>
                            <Main>
                                <div>
                                    <Route path='/home/:id' component={Info}></Route>
                                </div>
                            </Main>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}