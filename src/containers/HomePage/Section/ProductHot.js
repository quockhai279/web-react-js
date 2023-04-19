import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImg2 from "../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg"


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
                <div className='productHot-content' >
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' className='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className='price'>
                                    3,300,000 đ
                                    <del className='old-price'>4.200.000 đ</del>
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                                <div className='product-label-sale'>
                                    <span>-7%</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-customize'>
                            <img src={productImg2} />
                            <div className='list-detail'>
                                <a href='' class='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                <div className='star'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class='price'>
                                    3,300,000 đ
                                </div>
                            </div>
                            <div className='product-label-group'>
                                <div className='product-label'>
                                    <span>Hot</span>
                                </div>
                            </div>
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
