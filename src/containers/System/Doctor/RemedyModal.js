import React, { Component } from 'react';
import { connect } from "react-redux";
import './RemedyModal.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import moment from 'moment';
import { CommonUtils } from '../../../utils'

class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: ''
        }
    }

    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        if (this.props.dataModal !== prevProps.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            this.setState({
                imgBase64: base64
            })
        }
    }

    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
        // console.log('check state', this.state);
    }

    render() {
        let { isOpenModal, dataModal, sendRemedy } = this.props
        return (
            <Modal
                isOpen={isOpenModal}
                toggle={() => { this.toggle() }}
                className={'booking-modal-container'}
                size='lg'
                centered
            // backdrop={true}
            >
                <ModalHeader toggle={() => { this.toggle() }}>
                    Gửi hóa đơn khám bệnh thành công
                </ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-8 form-group'>
                            <label>Email bệnh nhân</label>
                            <input
                                className='form-control'
                                type='email'
                                value={this.state.email}
                                onChange={(event) => { this.handleOnChangeEmail(event) }}
                            />
                        </div>
                        <div className='col-4 form-group'>
                            <label>Chọn file đơn thuốc</label>
                            <input
                                className='form-control-file'
                                type='file'
                                onChange={(event) => this.handleOnchangeImage(event)}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => this.handleSendRemedy()}>Send</Button>
                    <Button color='secondary' onClick={() => this.toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal >
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
