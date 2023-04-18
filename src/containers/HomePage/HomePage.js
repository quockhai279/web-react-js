import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import ProductHot from './Section/ProductHot';
import Product from './ProductNew/Product';


class HomePage extends Component {

    render() {

        return (
            <div>
                <HomeHeader />
                <Product />
                <ProductHot />
                <div style={{ height: "300px" }}></div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
