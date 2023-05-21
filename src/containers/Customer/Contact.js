import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/Section/HomeFooter';
import HightLight from '../Customer/HightLight';
import './Contact.scss'


class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {

    }


    render() {
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <HightLight />
                <div className='Contact-details-container'>
                    <div className='Contact-details-content'>
                        <div className='content-left'>
                            <span>Get in touch</span>
                            <h2>Visit one of our agency locations or contact us today</h2>
                            <h3>Head Office</h3>
                            <div>
                                <li>
                                    <i className="fa fa-location-dot"></i>
                                    <p><strong>Address:</strong> 55 Hoàng Lê Kha, Thành phố Tây Ninh</p>
                                </li>
                                <li>
                                    <i className="fa-regular fa-envelope"></i>
                                    <p><strong>Gmail:</strong> Gmail@gmail.com</p>
                                </li>
                                <li>
                                    <i class="fa-brands fa-facebook"></i>
                                    <p><strong>Facebook:</strong> Facebook</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <p><strong>Phone:</strong> 123456789</p>
                                </li>
                                <li>
                                    <i className="fa-regular fa-clock"></i>
                                    <p><strong>Hours:</strong> Monday to Sunday: 9:00am to 20:00pm</p>
                                </li>
                            </div>

                        </div>
                        <div className='content-right'>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2143278498456!2d106.7218601!3d10.7948902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1684542006847!5m2!1svi!2s"
                                    width="600"
                                    height="450"
                                    style={{ width: '100%' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div >


                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
