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

    handleViewDetailDoctor = (doctor) => {
        console.log('view info doctor:', doctor);
        this.props.history.push(`/users/${doctor.id}`)
    }

    render() {
        let { arrDoctors } = this.state
        let { language } = this.props
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
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.firstName}, ${item.lastName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName}, ${item.lastName}`;
                                return (
                                    <div className='img-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                        <div
                                            className='img'
                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                        ></div>
                                        <div className='list-detail'>
                                            <a href='' className='title'>AIR FORCE 1 SHADOW MULTICOLOR</a>
                                            <div className='price'>
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>cơ xương khớp</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductHot));
