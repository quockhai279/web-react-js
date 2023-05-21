import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/Section/HomeFooter';
import HightLight from '../Customer/HightLight';
import './Cart.scss'
import logo from '../../assets/imgProduct/product/SNEAKER-AIR-FORCE.jpg'

class Cart extends Component {

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
                {/* <HightLight /> */}
                <div className='cart-container'>
                    <div className='cart-container-left row'>
                        <div className='checkout-process-bar'></div>
                        <div className='cart-container-table col-8 '>
                            <table width={"100%"}>
                                <thead>
                                    <tr>
                                        <td>Remove</td>
                                        <td>Image</td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Subtotal</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i className="fa-regular fa-circle-xmark"></i></td>
                                        <td>
                                            <img src={logo} className='img-product-cart' />

                                        </td>
                                        <td>Sneaker air force</td>
                                        <td>2.800.000 đ</td>
                                        <td>
                                            <input type='number' value={1} />
                                        </td>
                                        <td>2.800.000 đ</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa-regular fa-circle-xmark"></i></td>
                                        <td>
                                            <img src={logo} className='img-product-cart' />

                                        </td>
                                        <td>Sneaker air force</td>
                                        <td>2.800.000 đ</td>
                                        <td>
                                            <input type='number' value={1} />
                                        </td>
                                        <td>2.800.000 đ</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa-regular fa-circle-xmark"></i></td>
                                        <td>
                                            <img src={logo} className='img-product-cart' />

                                        </td>
                                        <td>Sneaker air force</td>
                                        <td>2.800.000 đ</td>
                                        <td>
                                            <input type='number' value={1} />
                                        </td>
                                        <td>2.800.000 đ</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa-regular fa-circle-xmark"></i></td>
                                        <td>
                                            <img src={logo} className='img-product-cart' />

                                        </td>
                                        <td>Sneaker air force</td>
                                        <td>2.800.000 đ</td>
                                        <td>
                                            <input type='number' value={1} />
                                        </td>
                                        <td>2.800.000 đ</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='cart-summary col-4'>
                            <span>Tổng tiền giỏ hàng</span>
                            <div>
                                <li>
                                    <p><strong>Tổng sản phẩm:</strong></p>
                                    <p>3</p>
                                </li>
                                <li>
                                    <p><strong>Tổng tiền hàng:</strong></p>
                                    <p>5.000.000 đ</p>
                                </li>
                                <li>
                                    <p><strong>Thành tiền:</strong></p>
                                    <p>5.000.000 đ</p>
                                </li>
                                <li>
                                    <p><strong>Tạm tính:</strong></p>
                                    <p>5.000.000 đ</p>
                                </li>
                            </div>
                            <div className='cart-summary-line'></div>
                            <button className='btn-summary'>Đặt hàng</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
