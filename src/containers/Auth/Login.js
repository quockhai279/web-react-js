import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 text-center login-text'>Login</div>
                        <div className="col-12 form group login-input">
                            <label>User Name:</label>
                            <input placeholder='Enter your username' type='text' className='form-control' />
                        </div>
                        <div className="col-12 form group login-input">
                            <label>Password:</label>
                            <input placeholder='Enter your password' type='Password' className='form-control' />
                        </div>
                        <div className='col-12 login-input'>
                            <button className='btn-login'>Login</button>
                        </div>
                        <div className='col-12 login-input'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-center'>Or Login with:</span>
                        </div>
                        <div className='col-12 login-social'>
                            <i className='fab fa-google-plus-g google'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
