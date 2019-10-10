import React from 'react'
import Form from './../form';

class SignIn extends React.Component {
    render() {
        return (
            <div className="signin">
                <div className="register-photo">
                    <img src={require("../img/signin.png")} alt="Авторизація" />
                </div>
                <div className="form">
                    <Form />
                </div>
                
            </div>
        )
    }
}

export default SignIn