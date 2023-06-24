import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailClinic.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfo from '../Doctor/DoctorExtraInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getAllDetailClinicById } from '../../../services/userService';
import _ from 'lodash';


class DetailClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [],
            dataDetailClinic: {},
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getAllDetailClinicById({ id })
            if (res && res.errCode === 0) {
                let data = res.data
                let arrDoctorId = []
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.doctorClinic
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrDoctorId.push(item.doctorId)
                        })
                    }
                }
                this.setState({
                    dataDetailClinic: res.data,
                    arrDoctorId,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {

        }
    }

    render() {
        let { arrDoctorId, dataDetailClinic } = this.state
        console.log('check state::: ', this.state);

        let { language } = this.props
        return (
            <div className='detail-clinic-container'>
                <HomeHeader />
                <div className='detail-clinic-body'>
                    <div className='description-detail-clinic'>
                        {dataDetailClinic && !_.isEmpty(dataDetailClinic)
                            &&
                            <>
                                <div>{dataDetailClinic.name}</div>
                                <div dangerouslySetInnerHTML={{ __html: dataDetailClinic.descriptionHTML }}>
                                </div>
                            </>
                        }
                    </div>
                    {arrDoctorId && arrDoctorId.length > 0
                        && arrDoctorId.map((item, index) => {
                            return (
                                <div className='each-doctor' key={index}>
                                    <div className='detail-clinic-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                isShowDescriptionDoctor={true}
                                                doctorId={item}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                            // dataTime={dataTime}
                                            />
                                        </div>
                                    </div>
                                    <div className='detail-clinic-content-right'>
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
                <HomeFooter />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
