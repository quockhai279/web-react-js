import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions"

class TableProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesRedux: [],
        }
    }

    componentDidMount() {
        this.props.fetchCategoryRedux()
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listCategories !== this.props.listCategories) {
            this.setState({
                categoriesRedux: this.props.listCategories
            })
        }
    }

    handleDeleteCategory = (category) => {
        this.props.deleteCategoryRedux(category.id)
    }

    handleEditCategory = (category) => {
        this.props.handleEditProductCategoryFromParentKey(category)
    }

    render() {
        console.log('check props', this.props.listCategories);
        console.log('check state', this.state.categoriesRedux);
        let arrCategories = this.state.categoriesRedux
        return (
            <table id='TableManageProduct'>
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Name EN</th>
                        <th>Name VN</th>
                        <th>Action</th>
                    </tr>
                    {arrCategories && arrCategories.length > 0 &&
                        arrCategories.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.valueEn}</td>
                                    <td>{item.valueVi}</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                            onClick={() => this.handleEditCategory(item)}
                                        ><i className='fas fa-pencil-alt'></i></button>
                                        <button
                                            className='btn-delete'
                                            onClick={() => this.handleDeleteCategory(item)}
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
        listCategories: state.product.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryRedux: () => dispatch(actions.fetchAllCategoriesStart()),
        deleteCategoryRedux: (id) => dispatch(actions.deleteCategory(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableProductCategory);
