import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageProduct.scss';
import * as actions from "../../../store/actions"

class TableManageProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsRedux: [],
        }
    }

    componentDidMount() {
        this.props.fetchProductRedux()
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                productsRedux: this.props.listProducts
            })
        }
    }


    handleDeleteProduct = (product) => {
        this.props.deleteAProductRedux(product.id)
    }

    handleEditProduct = (product) => {
        this.props.handleEditProductFromParentKey(product)
    }


    render() {
        let arrProducts = this.state.productsRedux
        return (
            <table id='TableManageProduct'>
                <tbody>
                    <tr>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    {arrProducts && arrProducts.length > 0 &&
                        arrProducts.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                            onClick={() => this.handleEditProduct(item)}
                                        ><i className='fas fa-pencil-alt'></i></button>
                                        <button
                                            className='btn-delete'
                                            onClick={() => this.handleDeleteProduct(item)}
                                        ><i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        listProducts: state.product.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProductRedux: () => dispatch(actions.fetchAllProductsStart()),
        deleteAProductRedux: (id) => dispatch(actions.deleteAProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageProduct);
