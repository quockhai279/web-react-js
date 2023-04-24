import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PromotionalProducts.scss'

import Slider from "react-slick";
import productImg2 from "../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg"


class PromotionalProducts extends Component {
    render() {
        return (
            <div className='productSale-container'>
                <div className='product-header'>
                    <h3 className='section-title'><a> - SẢN PHẨM KHUYẾN MÃI</a></h3>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromotionalProducts);
