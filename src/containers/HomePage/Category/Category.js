import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import Slider from "react-slick";
import { withRouter } from 'react-router'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentDidMount() {
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }

    render() {
        return (
            <div className='category-container'>
                <nav className='category'>
                    <h3 className='category-heading'>Danh mục</h3>
                    <ul className='category-list'>
                        <li className='category-item'>
                            <p className='category-item-link'>Áo</p>
                        </li>
                        <li className='category-item'>
                            <p className='category-item-link'>Quần</p>
                        </li>
                        <li className='category-item'>
                            <p className='category-item-link'>Đồng hồ</p>
                        </li>
                        <li className='category-item'>
                            <p className='category-item-link'>Giày</p>
                        </li>
                    </ul>
                </nav>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
