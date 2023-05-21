import React, { Component } from 'react';
import { connect } from "react-redux";

import './HightLight.scss'


class HightLight extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {

    }


    render() {
        return (
            <>
                <div className='hightLight-header-banner'>
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

export default connect(mapStateToProps, mapDispatchToProps)(HightLight);
