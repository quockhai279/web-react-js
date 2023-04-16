import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductHot.scss';
import { FormattedMessage } from 'react-intl';



class ProductHot extends Component {

    render() {
        return (
            <div className='product-hot'>
                <div className='product-content'>
                    product
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductHot);
