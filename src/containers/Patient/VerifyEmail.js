import React, { Component } from 'react';
import { connect } from "react-redux";
import './VerifyEmail.scss'
import { LANGUAGES } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { postVerifyBookingAppointment } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }
    }

    async componentDidMount() {
        if (this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookingAppointment({
                token: token,
                doctorId: doctorId
            })
            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }


    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        // console.log('check props :', this.props);
        if (this.props.match && this.props.match.params && this.props.match.params.id) {

        }
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {

        }
    }

    render() {
        let { statusVerify, errCode } = this.state
        return (
            <>
                <HomeHeader />
                <div className='verify-email-container'>
                    {statusVerify === false
                        ?
                        <div>
                            Loading data...
                        </div>
                        :
                        <div>
                            {errCode === 0
                                ?
                                <div className='info-booking'>Xác nhận lịch hẹn thành công!</div>
                                :
                                <div className='info-booking'>Lịch hẹn không tồn tại hoặc đã được xác nhận!</div>
                            }
                        </div>
                    }
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
