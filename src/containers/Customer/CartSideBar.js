import React, { Component } from 'react';
import { connect } from "react-redux";
import './CartSideBar.scss';
import CustomScrollbars from "../../components/CustomScrollbars"
import logoProduct from "../../assets/imgProduct/product/SNEAKER-AIR-FORCE.jpg"
import { withRouter } from 'react-router'


class CartSideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.HomeProductList !== this.props.HomeProductList) {
            this.setState({
                arrProduct: this.props.HomeProductList
            })
        }

    }

    returnToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/Cart`)
        }
    }

    CloseNavbarCart = () => {
        this.props.isClose()
    }

    render() {
        return (
            <div className={this.props.isOpen === true ? 'cart activeNavBar' : 'cart'}>
                <div className='header-cart'>
                    <h1>Giỏ hàng</h1>
                    <i class="fa-solid fa-xmark" onClick={this.CloseNavbarCart}></i>
                </div>
                <CustomScrollbars style={{ height: '68vh', width: '100%' }}>
                    <div className='center-cart'>
                        <div className='item-product-cart'>
                            <div className='thumbnail-product'>
                                <img src={logoProduct} className='' />
                            </div>
                            <div className='info-product-cart'>
                                <div className='item-product-cart-info'>
                                    <h3>
                                        <a href=''>Adidas ultraboost 20 metallic</a>
                                    </h3>
                                    <div className='item-product-cart-center'>
                                        <p className='properties-color'>
                                            Màu sắc: <strong>Đen</strong>
                                        </p>
                                        <p className=''>
                                            Size: <strong>XL</strong>
                                        </p>
                                    </div>
                                    <div className='item-product-cart-bottom'>
                                        <div className='info-price-mini'>
                                            <button className='price-quantity price-quantity-minus'>-</button>
                                            <input type='number' value={1} />
                                            <button className='price-quantity price-quantity-plus'>+</button>
                                        </div>
                                        <div className='price-cart-mini'>2.000.000 đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item-product-cart'>
                            <div className='thumbnail-product'>
                                <img src={logoProduct} className='' />
                            </div>
                            <div className='info-product-cart'>
                                <div className='item-product-cart-info'>
                                    <h3>
                                        <a href=''>adidas ultraboost 20 metallic</a>
                                    </h3>
                                    <div className='item-product-cart-center'>
                                        <p className='properties-color'>
                                            Màu sắc: <strong>Đen</strong>
                                        </p>
                                        <p className=''>
                                            Size: <strong>XL</strong>
                                        </p>
                                    </div>
                                    <div className='item-product-cart-bottom'>
                                        <div className='info-price-mini'>
                                            <button className='price-quantity price-quantity-minus'>-</button>
                                            <input type='number' value={1} />
                                            <button className='price-quantity price-quantity-plus'>+</button>
                                        </div>
                                        <div className='price-cart-mini'>2.000.000 đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item-product-cart'>
                            <div className='thumbnail-product'>
                                <img src={logoProduct} className='' />
                            </div>
                            <div className='info-product-cart'>
                                <div className='item-product-cart-info'>
                                    <h3>
                                        <a href=''>adidas ultraboost 20 metallic</a>
                                    </h3>
                                    <div className='item-product-cart-center'>
                                        <p className='properties-color'>
                                            Màu sắc: <strong>Đen</strong>
                                        </p>
                                        <p className=''>
                                            Size: <strong>XL</strong>
                                        </p>
                                    </div>
                                    <div className='item-product-cart-bottom'>
                                        <div className='info-price-mini'>
                                            <button className='price-quantity price-quantity-minus'>-</button>
                                            <input type='number' value={1} />
                                            <button className='price-quantity price-quantity-plus'>+</button>
                                        </div>
                                        <div className='price-cart-mini'>2.000.000 đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomScrollbars>
                <div className='checkOut'>
                    <div className='total'>0</div>
                    <div className='btn-viewCart' onClick={() => this.returnToCart()}>Xem giỏ hàng</div>
                </div>
            </div >
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartSideBar));
