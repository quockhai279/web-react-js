import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfo from '../Doctor/DoctorExtraInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getAllDetailSpecialtyById, getAllCodeService } from '../../../services/userService';
import _ from 'lodash';


class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [],
            dataDetailSpecialty: {},
            listProvince: []
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getAllDetailSpecialtyById({ id, location: 'ALL' })
            let resProvince = await getAllCodeService('PROVINCE')
            if (res && res.errCode === 0) {
                let data = res.data
                let arrDoctorId = []
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.doctorSpecialty
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrDoctorId.push(item.doctorId)
                        })
                    }
                }
                this.setState({
                    dataDetailSpecialty: res.data,
                    arrDoctorId,
                    listProvince: resProvince.data
                })
            }
        }
    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {

        }
    }

    handleOnChangeSelect = (event) => {
        console.log('check handleOnChangeSelect:::', event.target.value);
    }

    render() {
        let { arrDoctorId, dataDetailSpecialty, listProvince } = this.state
        console.log('check state::: ', this.state);
        let { language } = this.props
        return (
            <>
                <HomeHeader />
                <div className='detail-specialty-container'>
                    <div className='description-detail-specialty'>
                        {dataDetailSpecialty && !_.isEmpty(dataDetailSpecialty)
                            &&
                            <div dangerouslySetInnerHTML={{ __html: dataDetailSpecialty.descriptionHTML }}>

                            </div>
                        }
                    </div>
                    <div className='search-sp-doctor'>
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {listProvince && listProvince.length > 0
                                && listProvince.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                    )
                                })
                            }
                        </select>
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
