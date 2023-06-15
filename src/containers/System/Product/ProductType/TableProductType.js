import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions"

class TableProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productTypeRedux: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllProductTypeRedux()
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listProductType !== this.props.listProductType) {
            this.setState({
                productTypeRedux: this.props.listProductType
            })
        }
    }

    handleDeleteProductType = (productType) => {
        this.props.deleteProductType(productType.id)
    }

    handleEditProductType = (productType) => {
        this.props.handleEditProductTypeFromParentKey(productType)
    }

    render() {
        // console.log('check props', this.props.listProductType);
        // console.log('check state productTypeRedux', this.state.productTypeRedux);
        let arrProductType = this.state.productTypeRedux
        return (
            <table id='TableManageProduct'>
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Name EN</th>
                        <th>Name VN</th>
                        <th>Action</th>
                    </tr>
                    {arrProductType && arrProductType.length > 0 &&
                        arrProductType.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.valueEn}</td>
                                    <td>{item.valueVi}</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                            onClick={() => this.handleEditProductType(item)}
                                        ><i className='fas fa-pencil-alt'></i></button>
                                        <button
                                            className='btn-delete'
                                            onClick={() => this.handleDeleteProductType(item)}
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
        listProductType: state.product.productType,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProductTypeRedux: () => dispatch(actions.fetchAllProductType()),
        deleteProductType: (id) => dispatch(actions.deleteProductType(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableProductType);
