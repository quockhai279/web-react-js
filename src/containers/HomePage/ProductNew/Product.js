import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Product.scss';
import { FormattedMessage } from 'react-intl';
import productImg from "../../../assets/imgProduct/SNEAKER-AIR-FORCE.jpg"
import productImg2 from "../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg"


class Product extends Component {
    render() {
        return (
            <section className='section-product'>
                <div className='container'>
                    <div className='product-header'>
                        <h3 className='section-title'><a> - SẢN PHẨM</a></h3>
                    </div>
                    <div className='product-list'>
                        <div className='list-container'>
                            <div className='item'>
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
                                        <span>New</span>
                                    </div>
                                    <div className='product-label-sale'>
                                        <span>-7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='list-container'>
                            <div className='item'>
                                <img src={productImg} />
                                <div className='list-detail'>
                                    <a href='' className='title'>AIR FORCE 1</a>
                                    <div className='star'>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className='price'>
                                        3.900.000 đ
                                    </div>
                                </div>
                                <div className='product-label-group'>
                                    <div className='product-label'>
                                        <span>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='list-container'>
                            <div className='item'>
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
                                        <span>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='list-container'>
                            <div className='item'>
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
                                    <div className='price'>3,300,000 đ</div>
                                </div>
                                <div className='product-label-group'>
                                    <div className='product-label'>
                                        <span>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='list-container'>
                            <div className='item'>
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
                                    <div className='price'>3,300,000 đ</div>
                                </div>
                                <div className='product-label-group'>
                                    <div className='product-label'>
                                        <span>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='ps-product-col'></div>
                </div>
            </section >
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);