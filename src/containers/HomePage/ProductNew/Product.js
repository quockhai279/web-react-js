import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Product.scss';
import { FormattedMessage } from 'react-intl';
import productImg2 from "../../../assets/imgProduct/product/nike-air-force-1-shadow-multicolor.jpeg"
import * as actions from '../../../store/actions'
import { withRouter } from 'react-router'

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrProduct: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.HomeProductList !== this.props.HomeProductList) {
            this.setState({
                arrProduct: this.props.HomeProductList
            })
        }
    }

    componentDidMount() {
        this.props.listProductHomeRedux()
    }

    handleViewProductDetail = (product) => {
        this.props.history.push(`/products/${product.id}`)
    }

    render() {
        let { arrProduct } = this.state
        return (
            <section className='section-product'>
                <div className='container'>
                    <div className='product-header'>
                        <h3 className='section-title'><a> - SẢN PHẨM</a></h3>
                    </div>
                    <div className='product-list'>
                        {arrProduct && arrProduct.length > 0
                            && arrProduct.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                }
                                return (
                                    <div className='item-container' key={index} onClick={() => this.handleViewProductDetail(item)}>
                                        <div className='img-productNew' style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                        <div className='list-detail'>
                                            <a href='' className='title'>{`${item.name}`}</a>
                                            <div className='star'>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className='price'>
                                                {`${item.price}`} đ
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
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        HomeProductList: state.product.listProductsHome,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        listProductHomeRedux: () => dispatch(actions.fetchProductListHome())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
