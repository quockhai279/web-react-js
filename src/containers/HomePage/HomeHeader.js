import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions'

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <nav className='home-header-content-top'>
                        <div className='right-content-top'>
                            <div className='flag support'>
                                <i className='fas fa-question-circle'></i><FormattedMessage id={'homeheader.help'} />
                            </div>
                            <div className='language'>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VI</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
                            </div>
                        </div>
                    </nav>
                    <nav className='home-header-content-bot'>
                        <div className='left-content'>
                            <i className="fa fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'><b><FormattedMessage id={'homeheader.intro'} /></b></div>
                            <div className='child-content'><b>Nike</b></div>
                            <div className='child-content'><b>Biti's</b></div>
                            <div className='child-content'><b>Jordan</b></div>
                            <div className='child-content'><b>Converse</b></div>
                            <div className='child-content'><b>Adidas</b></div>
                            <div className='child-content'><b>New Balance</b></div>
                            <div className='child-content'><b>Puma</b></div>
                            <div className='child-content'><b><FormattedMessage id={'homeheader.sale'} /></b></div>
                        </div >
                        <div className='right-content'>
                            <i class="fa-sharp fa-light fa-cart-shopping"></i>
                        </div>
                    </nav >
                </div >
                <div className='home-header-banner'>
                    <div className='search'>
                        <i className='fas fa-search'></i>
                        <input type='text' placeholder='Tìm kiếm sản phẩm' ></input>
                    </div>

                </div>
                <section className='ps-features'>
                    <div className='list'>
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
            </React.Fragment >

        );
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
