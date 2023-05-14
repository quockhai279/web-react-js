import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import logo from '../../../assets/logo.png'
import logoApp from '../../../assets/imgProduct/pay/app.jpg'
import logoPlay from '../../../assets/imgProduct/pay/play.jpg'
import logoPay from '../../../assets/imgProduct/pay/pay.png'
import './HomeFooter.scss'

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className='home-footer'>
                    <div className='col'>
                        <a href='#' className='footer-logo'><img src={logo} /></a>
                        <h4>Contact</h4>
                        <p><strong>Address:</strong> 55 Hoàng Lê Kha, Thành phố Tây Ninh</p>
                        <p><strong>Phone:</strong> 123456789</p>
                        <p><strong>Hours:</strong> 9:00 AM - 20:00 PM, Mon - Sun</p>
                        <div className="follow">
                            <h4>Follow us</h4>
                            <div className='icon'>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h4>About</h4>
                        <a href='#'>About Us</a>
                        <a href='#'>Delivery Information</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms & Conditions</a>
                        <a href='#'>Contact Us</a>
                    </div>
                    <div className='col'>
                        <h4>My Account</h4>
                        <a href='#'>Sign In</a>
                        <a href='#'>View Cart</a>
                        <a href='#'>My wishlist</a>
                        <a href='#'>Track My Order</a>
                        <a href='#'>Help</a>
                    </div>
                    <div className='col install'>
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <div className='row'>
                            <img src={logoApp} alt='' />
                            <img src={logoPlay} alt='' />
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img src={logoPay} alt='' />
                    </div>
                </div>
                <div className='copyright'>
                    <p>&copy; 2023 - Châu Quốc Khải</p>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
