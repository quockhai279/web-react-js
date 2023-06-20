import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import Slider from "react-slick";
import { withRouter } from 'react-router'
import { getAllSpecialty } from '../../../services/userService'

class Specialty extends Component {
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
        let res = await getAllSpecialty()
        console.log('check getAllSpecialty res res response:', res);
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    // handleViewDetailDoctor = (doctor) => {
    //     if (this.props.history) {
    //         this.props.history.push(`/detail-doctor/${doctor.id}`)
    //     }
    // }

    render() {
        let { language } = this.props
        let { dataSpecialty } = this.state
        return (
            <div className='section-specialty-container'>
                <div className='specialty-header'>
                    <h3 className='section-title'><a> - Chuyên Khoa Phổ Biến</a></h3>
                </div>
                <div className='specialty-body' >
                    <Slider {...this.props.settings}>
                        {dataSpecialty && dataSpecialty.length > 0
                            && dataSpecialty.map((item, index) => {
                                return (
                                    <div className='section-customize' key={index}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
