import React, { Component } from 'react';
import { connect } from "react-redux";
import './Page.scss'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, preState, snapshot) {
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {

        }
    }

    render() {

        return (
            <>
                <div className='header-page-container'>
                    <div className=''>
                        <ul>
                            <li>home</li>
                            <li>shop</li>
                            <li>Sale</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div className=''></div>
                    <div className=''></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
