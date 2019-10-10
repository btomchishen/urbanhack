import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUpP from './signup-p'
import SignUpC from './signup-c'


class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <div className="register-photo">
                    <img src={require("../img/register.jpg")} alt="Реєстрація" />
                </div>
                <div className="register-flex">
                    <div className="register">
                        <Router>
                            <Link to="/signupp"><div className="dws"><a href="#" class="button">Для перетримника</a></div></Link>
                            <Link to="/signupc"><div className="dws"><a href="#" class="button">Для компанії</a></div></Link>
                            <Switch>
                                <Route path="/signupp">
                                    <SignUpP />
                                </Route>
                                <Route path="/signupc">
                                    <SignUpC />
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