import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfo from '../Doctor/DoctorExtraInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [4, 23, 5]
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {

        }
    }

    render() {
        let { arrDoctorId } = this.state
        return (
            <>
                <HomeHeader />
                <div className='detail-specialty-container'>
                    <div className='description-detail-specialty'>

                    </div>
                    {arrDoctorId && arrDoctorId.length > 0
                        && arrDoctorId.map((item, index) => {
                            return (
                                <div className='each-doctor' key={index}>
                                    <div className='detail-specialty-content-left'>
                                        <div className='profile-doctor'></div>
                                        <ProfileDoctor
                                            isShowDescriptionDoctor={true}
                                            doctorId={item}
                                        // dataTime={dataTime}
                                        />
                                    </div>
                                    <div className='detail-specialty-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                        <div className='doctor-extra-info'>
                                            <DoctorExtraInfo
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
