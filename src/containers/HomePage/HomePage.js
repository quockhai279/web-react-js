import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Product from './Product/Product';
import ProductHot from './Section/ProductHot';
import PromotionalProducts from './Section/PromotionalProducts'
import HandBook from './Section/HandBook'
import About from './Section/About'
import HomeFooter from './Section/HomeFooter'

import Specialty from './Section/Specialty';

import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HomePage extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToScroll: 5,
            slidesToShow: 5,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        let Settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToScroll: 5,
            slidesToShow: 5,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Product />
                <ProductHot settings={settings} />
                <PromotionalProducts settings={settings} />
                <Specialty settings={Settings} />
                <HandBook />
                <About />
                <HomeFooter />
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
