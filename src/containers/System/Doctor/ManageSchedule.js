import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from "../../../store/actions"
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';


class ManageSchedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listDoctors: [],
            selectedDoctor: {},
            currentDate: '',
            rangeTime: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllDoctorsRedux()
        this.props.fetchAllScheduleTime()
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect,
            })
        }
        if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
            console.log('check range time:', this.props.allScheduleTime);
            this.setState({
                rangeTime: this.props.allScheduleTime
            })
        }
        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
        //     this.setState({
        //         listDoctors: dataSelect
        //     })
        // }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = ` ${item.firstName} ${item.lastName}`
                object.label = language === LANGUAGES.VI ? labelVi : labelEn
                object.value = item.id
                result.push(object)
            })
        }
        return result
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedDoctor: selectedOption });

    }

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    render() {
        let { rangeTime } = this.state
        console.log('check state:', this.state);
        let { language } = this.props
        return (
            <div className='manage-schedule-container'>
                <div className='m-s-title'>
                    <FormattedMessage id='manage-schedule.title' />
                </div>
                <div className='container'>
                    <div className="row">
                        <div className='col-6'>
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChangeSelect}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className='col-6'>
                            <label>Chọn ngày</label>
                            <DatePicker
                                className='col-6 form-control'
                                onChange={this.handleOnChangeDatePicker}
                                value={this.state.currentDate}
                                minDate={new Date()}
                            />
                        </div>

                        <div className='col-12 my-5 pick-hour-container'>
                            {rangeTime && rangeTime.length > 0 &&
                                rangeTime.map((item, index) => {
                                    return (
                                        <button className='btn btn-save-schedule' key={index}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Lưu thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allScheduleTime: state.admin.allScheduleTime
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctorsRedux: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
