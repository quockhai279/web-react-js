import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/Section/HomeFooter';
import './Sale.scss'
import Category from '../HomePage/Category/Category'

class Sale extends Component {

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
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='sale-container'>
                    <div className='category-sideBar col-2'>
                        <Category />
                    </div>
                    <div className='category-product col-10'>
                        <h3 className='category-heading'>Sản phẩm</h3>
                        <div className='list-product'>
                            <div className='item-product'></div>
                            <div className='item-product'></div>
                            <div className='item-product'></div>
                            <div className='item-product'></div>
                        </div>
                    </div>
                </div>

                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
