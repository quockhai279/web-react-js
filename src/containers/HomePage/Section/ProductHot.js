import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
import productImg2 from "../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg"


class ProductHot extends Component {

    render() {
        return (
            <div className='productHot-container'>
                <div className='product-header'>
                    <h3 className='section-title'><a> - SẢN PHẨM NỔI BẬT</a></h3>
                </div>
                <div className='productHot-content' >
                    <Slider {...this.props.settings}>
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
