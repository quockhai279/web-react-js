import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import Slider from "react-slick";
import { withRouter } from 'react-router'
import { getAllClinic } from '../../../services/userService'

class MedicalFacility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSpecialty: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }

    async componentDidMount() {
        let res = await getAllClinic()
        console.log('check getAllSpecialty res res response:', res);
        if (res && res.errCode === 0) {
            this.setState({
                dataClinic: res.data ? res.data : []
            })
        }
    }

    handleViewDetailMedicalFacility = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail_clinic/${item.id}`)
        }
    }

    render() {
        let { language } = this.props
        let { dataClinic } = this.state
        return (
            <div className='section-specialty-container'>
                <div className='specialty-header'>
                    <h3 className='section-title'><a> - Cơ sở y tế nổi bật</a></h3>
                </div>
                <div className='specialty-body' >
                    <Slider {...this.props.settings}>
                        {dataClinic && dataClinic.length > 0
                            && dataClinic.map((item, index) => {
                                return (
                                    <div className='section-customize' key={index} onClick={() => this.handleViewDetailMedicalFacility(item)}>
                                        <div className='img'
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                        <div className='list-detail'>
                                            <a href='' className='title'>{item.name}</a>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
