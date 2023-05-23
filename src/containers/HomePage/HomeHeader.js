import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions'
import { withRouter } from 'react-router'
import logo from "../../assets/logo.png"
import { BsCart3 } from "react-icons/bs";
import CartSideBar from '../Customer/CartSideBar';


class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OpenViewNavbarCart: false
        }
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    returnToShop = () => {
        if (this.props.history) {
            this.props.history.push(`/Shop`)
        }
    }

    returnToContact = () => {
        if (this.props.history) {
            this.props.history.push(`/Contact`)
        }
    }

    ShowNavBarCart = () => {
        this.setState({
            OpenViewNavbarCart: true
        })
    }

    handleCloseNavbarCart = () => {
        this.setState({
            OpenViewNavbarCart: !this.state.OpenViewNavbarCart
        })
    }

    render() {
        let language = this.props.language
        return (
            <React.Fragment>
                <section className='header-navbar-homepage'>
                    <div className='header-navbar-container-top'>
                        <ul className='header-navbar-list'>
                            <li className='header-navbar-item header-navbar-item-separate'>
                                <i className='fas fa-question-circle navbar-icon'></i>
                                <FormattedMessage id={'homeheader.help'} />
                            </li>
                            <li className='header-navbar-item'>
                                <div className='language'>
                                    <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VI</span></div>
                                    <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
                                </div>
                            </li>
                        </ul>
                        <ul className='header-navbar-list'>
                            <li className='header-navbar-item header-navbar-item-separate'>Đăng ký</li>
                            <li className='header-navbar-item'>Đăng nhập</li>
                        </ul>
                    </div>
                    <div className='header-navbar-container-bottom'>
                        <div className='navbar-bottom-left'>
                        </div>
                        <div className='header-logo' >
                            <img className='header-logo-img' src={logo} onClick={() => this.returnToShop()} />
                        </div>
                        <div className='navbar-bottom-center'>
                            <ul id='navbar' className='header-navbar'>
                                <li><a href=''>Home</a></li>
                                <li><a className='active' href='' onClick={() => this.returnToShop()}>Shop</a></li>
                                <li><a href=''>Sale</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href='' onClick={() => this.returnToContact()}>Contact</a></li>
                            </ul>
                        </div>
                        <div className='navbar-bottom-right'>
                            <div className='header-navbar-search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='Tìm kiếm sản phẩm' ></input>
                            </div>
                            <div className='icon-shopping-cart'>
                                <BsCart3 className="fa fa-cart-shopping icon-cart" onClick={() => this.ShowNavBarCart()} />
                                <span className='cart-notice'>3</span>
                                <CartSideBar
                                    isOpen={this.state.OpenViewNavbarCart}
                                    isClose={this.handleCloseNavbarCart}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {this.props.isShowBanner === true &&
                    <section>
                        <div className='header-banner-homepage'>
                        </div>
                        <div className='features'>
                            <div className='row-content'>
                                <div className='iconbox-header'>
                                    <i className="fa fa-box"></i>
                                    <h3><FormattedMessage id={'homebanner.genuine-commitment'} /></h3>
                                    <p><FormattedMessage id={'homebanner.authentic'} /></p>
                                </div>
                                <div className='iconbox-content'>
                                    <p><FormattedMessage id={'homebanner.authentic-content'} /></p>
                                </div>
                            </div>
                            <div className='row-content'>
                                <div className='iconbox-header'>
                                    <i className="fa fa-truck"></i>
                                    <h3><FormattedMessage id={'homebanner.fast-delivery'} /></h3>
                                    <p><FormattedMessage id={'homebanner.express-delivery'} /></p>
                                </div>
                                <div className='iconbox-content'>
                                    <p><FormattedMessage id={'homebanner.express-delivery-content'} /></p>
                                </div>
                            </div>
                            <div className='row-content'>
                                <div className='iconbox-header'>
                                    <i className="fa fa-phone"></i>
                                    <h3><FormattedMessage id={'homebanner.supporting'} /></h3>
                                    <p><FormattedMessage id={'homebanner.supporting-24h'} /></p>
                                </div>
                                <div className='iconbox-content'>
                                    <p><FormattedMessage id={'homebanner.supporting-content'} /></p>
                                </div>
                            </div>
                        </div>
                    </section>
                }


            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
