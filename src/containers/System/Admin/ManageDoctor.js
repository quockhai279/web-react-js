import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import * as actions from "../../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import { getDetailInfoDoctor } from '../../../services/userService';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedDoctor: '',
            description: '',

            listDoctors: [],
            hasOldData: false,

            listPrice: [],
            listPayment: [],
            listProvince: [],
            listClinic: [],
            listSpecialty: [],

            selectedPrice: '',
            selectedPayment: '',
            selectedProvince: '',
            selectedClinic: '',
            selectedSpecialty: '',

            nameClinic: '',
            addressClinic: '',
            note: '',
            clinicId: '',
            specialtyId: '',

        }
    }

    componentDidMount() {
        this.props.fetchAllDoctorsRedux()
        this.props.getAllRequiredDoctorInfo()
    }

    buildDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props
        if (inputData && inputData.length > 0) {
            if (type === 'USERS') {
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.lastName} ${item.firstName}`
                    let labelEn = `${item.firstName} ${item.lastName}`
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn
                    object.value = item.id
                    result.push(object)
                })
            }
            if (type === 'PRICE') {
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.valueVi} `
                    let labelEn = `${item.valueEn} USD`
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn
                    object.value = item.keyMap
                    result.push(object)
                })
            }
            if (type === 'PAYMENT' || type === 'PROVINCE') {
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.valueVi} `
                    let labelEn = `${item.valueEn} `
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn
                    object.value = item.keyMap
                    result.push(object)
                })
            }
            if (type === 'SPECIALTY') {
                inputData.map((item, index) => {
                    let object = {};
                    object.label = item.name
                    object.value = item.id
                    result.push(object)
                })
            }
        }
        // console.log('result:', result);
        return result
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors, 'USERS')
            this.setState({
                listDoctors: dataSelect,
            })
        }
        if (prevProps.allRequiredDoctorInfo !== this.props.allRequiredDoctorInfo) {
            let { resPayment, resPrice, resProvince, resSpecialty } = this.props.allRequiredDoctorInfo
            let dataSelectedPrice = this.buildDataInputSelect(resPrice, 'PRICE')
            let dataSelectedPayment = this.buildDataInputSelect(resPayment, 'PAYMENT')
            let dataSelectedProvince = this.buildDataInputSelect(resProvince, 'PROVINCE')
            let dataSelectedSpecialty = this.buildDataInputSelect(resSpecialty, 'SPECIALTY')
            // console.log('allRequiredDoctorInfo props:', this.props.allRequiredDoctorInfo);
            // console.log('allRequiredDoctorInfo data:', dataSelectedPrice, dataSelectedPayment, dataSelectedProvince);
            this.setState({
                listPrice: dataSelectedPrice,
                listPayment: dataSelectedPayment,
                listProvince: dataSelectedProvince,
                listSpecialty: dataSelectedSpecialty,
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors, 'USERS')
            let { resPayment, resPrice, resProvince } = this.props.allRequiredDoctorInfo
            let dataSelectedPrice = this.buildDataInputSelect(resPrice, 'PRICE')
            let dataSelectedPayment = this.buildDataInputSelect(resPayment, 'PAYMENT')
            let dataSelectedProvince = this.buildDataInputSelect(resProvince, 'PROVINCE')
            this.setState({
                listDoctors: dataSelect,
                listPrice: dataSelectedPrice,
                listPayment: dataSelectedPayment,
                listProvince: dataSelectedProvince,
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state
        this.props.saveDetailDoctors({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

            selectedPrice: this.state.selectedPrice.value,
            selectedPayment: this.state.selectedPayment.value,
            selectedProvince: this.state.selectedProvince.value,
            nameClinic: this.state.nameClinic,
            addressClinic: this.state.addressClinic,
            note: this.state.note,
            clinicId: this.state.selectedClinic && this.state.selectedClinic.value ? this.state.selectedClinic.value : '',
            specialtyId: this.state.selectedSpecialty.value
        })
    }

    handleChangeSelect = async (selectedDoctor) => {
        this.setState({ selectedDoctor });
        let { listPayment, listPrice, listProvince } = this.state
        let res = await getDetailInfoDoctor(selectedDoctor.value)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown
            let addressClinic = '', paymentId = '', note = '',
                priceId = '', nameClinic = '', provinceId = '',
                selectedPayment = '', selectedPrice = '', selectedProvince = '';
            if (res.data.DoctorInfo) {
                addressClinic = res.data.DoctorInfo.addressClinic
                nameClinic = res.data.DoctorInfo.nameClinic
                note = res.data.DoctorInfo.note

                paymentId = res.data.DoctorInfo.paymentId
                priceId = res.data.DoctorInfo.priceId
                provinceId = res.data.DoctorInfo.provinceId

                selectedPayment = listPayment.find(item => {
                    return item && item.value === paymentId
                });
                selectedPrice = listPrice.find(item => {
                    return item && item.value === priceId
                });
                selectedProvince = listProvince.find(item => {
                    return item && item.value === provinceId
                });
                // console.log('check find array :::::::', findItem, listPayment, paymentId);
                // console.log('check find array :::::::', selectedProvince, selectedPrice, selectedPayment);
            }
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true,
                addressClinic: addressClinic,
                nameClinic: nameClinic,
                note: note,
                selectedPayment: selectedPayment,
                selectedPrice: selectedPrice,
                selectedProvince: selectedProvince,
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false,
                addressClinic: '',
                nameClinic: '',
                note: ''
            })
        }
        console.log('check res :', res);
    }

    handleOnChangeSelectDoctorInfo = async (selectedDoctor, name) => {
        let stateName = name.name
        let stateCopy = { ...this.state }
        stateCopy[stateName] = selectedDoctor
        // console.log('stateCopy[stateName] ::::', stateCopy[stateName]);
        this.setState({
            ...stateCopy
        })
        // console.log('selectedDoctor vs name:', selectedDoctor, stateName);
    }

    handleOnChangeText = (event, id) => {
        let stateCopy = { ...this.state }
        stateCopy[id] = event.target.value
        this.setState({
            ...stateCopy
        })
    }

    render() {
        let { hasOldData, listSpecialty } = this.state
        // console.log('check render state::::::::::s', this.state);
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>
                    <FormattedMessage id='admin.manage-doctor.title' />
                </div>
                <div className='more-info mb-3'>
                    <div className='content-left form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.select-doctor' /></label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                            placeholder={<FormattedMessage id='admin.manage-doctor.select-doctor' />}
                        />
                    </div>
                    <div className='content-right'>
                        <label><FormattedMessage id='admin.manage-doctor.intro' /></label>
                        <textarea className='form-control'
                            onChange={(event) => this.handleOnChangeText(event, 'description')}
                            value={this.state.description}
                        ></textarea>
                    </div>
                </div>
                <div className='more-info-extra row'>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.price' /></label>
                        <Select
                            value={this.state.selectedPrice}
                            onChange={this.handleOnChangeSelectDoctorInfo}
                            options={this.state.listPrice}
                            placeholder={<FormattedMessage id='admin.manage-doctor.price' />}
                            name="selectedPrice"
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.payment' /></label>
                        <Select
                            value={this.state.selectedPayment}
                            onChange={this.handleOnChangeSelectDoctorInfo}
                            options={this.state.listPayment}
                            placeholder={<FormattedMessage id='admin.manage-doctor.payment' />}
                            name="selectedPayment"
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.province' /></label>
                        <Select
                            value={this.state.selectedProvince}
                            onChange={this.handleOnChangeSelectDoctorInfo}
                            options={this.state.listProvince}
                            placeholder={<FormattedMessage id='admin.manage-doctor.province' />}
                            name="selectedProvince"
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.nameClinic' /></label>
                        <input className='form-control'
                            onChange={(event) => this.handleOnChangeText(event, 'nameClinic')}
                            value={this.state.nameClinic}
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.addressClinic' /></label>
                        <input className='form-control'
                            onChange={(event) => this.handleOnChangeText(event, 'addressClinic')}
                            value={this.state.addressClinic}
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label><FormattedMessage id='admin.manage-doctor.note' /></label>
                        <input className='form-control'
                            onChange={(event) => this.handleOnChangeText(event, 'note')}
                            value={this.state.note}
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label>Chọn chuyên khoa</label>
                        <Select
                            value={this.state.selectedSpecialty}
                            onChange={this.handleOnChangeSelectDoctorInfo}
                            options={this.state.listSpecialty}
                            placeholder={<FormattedMessage id='admin.manage-doctor.specialty' />}
                            name="selectedSpecialty"
                        />
                    </div>
                    <div className='col-3 form-group'>
                        <label>Chọn phòng khám</label>
                        <Select
                            value={this.state.selectedClinic}
                            onChange={this.handleOnChangeSelectDoctorInfo}
                            options={this.state.listClinic}
                            placeholder={<FormattedMessage id='admin.manage-doctor.select-clinic' />}
                            name="selectedClinic"
                        />
                    </div>
                </div>
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? 'save-content-doctor mb-3' : 'create-content-doctor mb-3'}>
                    {hasOldData === true ? <span><FormattedMessage id='admin.manage-doctor.save' /></span> : <span><FormattedMessage id='admin.manage-doctor.add' /></span>}
                </button>
                <div className='row'>

                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allRequiredDoctorInfo: state.admin.allRequiredDoctorInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctorsRedux: () => dispatch(actions.fetchAllDoctors()),
        saveDetailDoctors: (data) => dispatch(actions.saveDetailDoctors(data)),
        getAllRequiredDoctorInfo: () => dispatch(actions.getRequiredDoctorInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
