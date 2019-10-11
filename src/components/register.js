import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUpP from './signup-p'
import SignUpC from './signup-c'
import SignUpT from './signup-t'


class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <div className="register-photo">
                   
                </div>
                <div className="register-flex">
                    <div className="register">
                        <Router>
                            <Link to="/signupp"><div className="dws but1"><a href="#" class="button">Для перетримника</a></div></Link>
                            <Link to="/signupc"><div className="dws but1"><a href="#" class="button">Для вет. закладу</a></div></Link>
                            <Link to="/signupt"><div className="dws"><a href="#" class="button">Для тренера</a></div></Link>
                            <Switch>
                                <Route path="/signupp">
                                    <SignUpP />
                                </Route>
                                <Route path="/signupc">
                                    <SignUpC />
                                </Route>
                                <Route path="/signupt">
                                    <SignUpT />
                                </Route>
                            </Switch>
                        </Router>
                        
                        
                    </div>

                </div>

            </div>
        )
    }
}

export default Register