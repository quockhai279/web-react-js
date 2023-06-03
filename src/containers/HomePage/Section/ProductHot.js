import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import Slider from "react-slick";
import { withRouter } from 'react-router'


class ProductHot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrProductHot: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.productHotList !== this.props.productHotList) {
            this.setState({
                arrProductHot: this.props.productHotList
            })
        }
    }

    componentDidMount() {
        this.props.listProductHomeRedux()

    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }

    render() {
        let { arrProductHot } = this.state
        return (
            <div className='productHot-container'>
                <div className='product-header'>
                    <h3 className='section-title'><a> - SẢN PHẨM NỔI BẬT</a></h3>
                </div>
                <div className='productHot-content' >
                    <Slider {...this.props.settings}>
                        {arrProductHot && arrProductHot.length > 0
                            && arrProductHot.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                }
                                return (
                                    <div className='img-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                        <div
                                            className='img'
                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                        ></div>
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
                                                <span>Hot</span>
                                            </div>
                                            <div className='product-label-sale'>
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
        productHotList: state.product.listProductsHot,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        listProductHomeRedux: () => dispatch(actions.fetchProductListHome()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductHot));
