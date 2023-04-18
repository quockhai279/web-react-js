import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductHot extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToScroll: 5,
            slidesToShow: 5,
            autoplay: false,
        }
        return (
            <div className='productHot-container'>
                <div className='product-header'>
                    <h3 className='section-title'><a> - SẢN PHẨM NỔI BẬT</a></h3>
                </div>
                <div className='productHot-content'>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <h3>1</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>2</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>3</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>4</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>5</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>6</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>7</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>8</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>9</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>10</h3>
                        </div>
                    </Slider>
                </div >
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductHot);
