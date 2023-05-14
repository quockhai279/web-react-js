import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter';
import './ProductDetail.scss'
class ProductDetail extends Component {
    render() {
        // console.log(this.props.math.params.id); //:44 //url:id
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='doctor-detail-container'> ok chua
                    <div className='intro-doctor'></div>
                    <div className='schedule-doctor'></div>
                    <div className='detail-info-doctor'></div>
                </div>

                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
