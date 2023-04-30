import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';

import Slider from "react-slick";
import productImg2 from "../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg"


class ProductHot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }

    componentDidMount() {
        this.props.loadTopDoctors()
    }

    render() {
        console.log('check props:', this.props.topDoctorsRedux);
        let { arrDoctors, language } = this.state
        arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        return (
            <div className='productHot-container'>
                <div className='product-header'>
                    <h3 className='section-title'><a> - SẢN PHẨM NỔI BẬT</a></h3>
                </div>
                <div className='productHot-content' >
                    <Slider {...this.props.settings}>
                        {arrDoctors && arrDoctors.length > 0
                            && arrDoctors.map((item, index) => {
                                // if (index == 0) {
                                //     console.log('check item:', item);
                                // }
                                // let nameVi = `${item.positionData.valueVi}, ${item.firstName}, ${item.lastName}`;
                                // let nameEn = `${item.positionData.valueEn}, ${item.firstName}, ${item.lastName}`;
                                return (
                                    <div className='img-customize' key={index}>
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
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductHot);
