import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfo.scss'
import { getScheduleDoctorByDate } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
class DoctorExtraInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfo: false,
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, preState, snapshot) {

    }

    showHideDetailInfo = (status) => {
        this.setState({
            isShowDetailInfo: status
        })
    }

    render() {
        let { isShowDetailInfo } = this.state
        return (
            <div className='doctor-extraInfo-container'>
                <div className='content-up'>
                    <div className='text-address'>Dia chỉ phòng </div>
                    <div className='name-clinic'>phòng khám</div>
                    <div className='detail-address'>dia chỉ </div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfo === false &&
                        <div className=''>
                            Giá khám: 250. <span onClick={() => this.showHideDetailInfo(true)}>
                                Xem chi tiết
                            </span>
                        </div>
                    }
                    {isShowDetailInfo === true &&
                        <>
                            <div className='detail-info-title-price'>Giá khám</div>
                            <div className='detail-info-table'>
                                <div className='price'>
                                    <span className='left'>Giá khám</span>
                                    <span className='right'>250000</span>
                                </div>
                                <div className='note'>
                                    duoc uu tien kham truoc khi dat kham qua
                                    Dia chỉ phòng
                                </div>
                            </div>
                            <div className='payment'>phòng khám</div>
                            <div className='hide-price'>
                                <span onClick={() => this.showHideDetailInfo(false)}>
                                    Ẩn bản giá
                                </span>
                            </div>
                        </>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
