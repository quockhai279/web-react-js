import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import * as actions from '../../../../store/actions'
import 'react-image-lightbox/style.css';
import TableProductCategory from '../../Product/ProductCategory/TableProductCategory';

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

            nameVi: '',
            nameEn: '',

            action: '',
            categoryEditId: ''

        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listCategories !== this.props.listCategories) {
            this.setState({
                nameVi: '',
                nameEn: '',
                action: CRUD_ACTIONS.CREATE,

            })
        }


    }

    handleSaveCategory = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewCategory({
                // key: input state 
                valueEn: this.state.nameEn,
                valueVi: this.state.nameVi,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editCategoryRedux({
                id: this.state.categoryEditId,
                valueEn: this.state.nameEn,
                valueVi: this.state.nameVi,
            })
        }
    }

    handleEditProductCategoryFromParent = (category) => {
        this.setState({
            //conSangCha
            nameEn: category.valueEn,
            nameVi: category.valueVi,
            action: CRUD_ACTIONS.EDIT,
            categoryEditId: category.id
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ["nameVi", "nameEn"]
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    render() {
        let { nameVi, nameEn } = this.state

        return (
            <div className='product-redux-container'>
                <div className='title'>Product Category</div>
                <div className='product-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>Thêm mới danh mục sản phảm</div>
                            <div className='col-3'>
                                <label>Tên tiếng Anh</label>
                                <input className='form-control' type='text'
                                    value={nameEn}
                                    onChange={(event) => { this.onChangeInput(event, 'nameEn') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Tên tiếng Việt</label>
                                <input className='form-control' type='text'
                                    value={nameVi}
                                    onChange={(event) => { this.onChangeInput(event, 'nameVi') }}
                                />
                            </div>
                            <div className='col-12 my-3'>
                                <button
                                    className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                    onClick={() => this.handleSaveCategory()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT
                                        ?
                                        <FormattedMessage id="manage-user.Edit" />
                                        :
                                        <FormattedMessage id="manage-user.Save" />
                                    }
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableProductCategory
                                    handleEditProductCategoryFromParentKey={this.handleEditProductCategoryFromParent}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listCategories: state.product.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewCategory: (data) => dispatch(actions.createNewCategory(data)),
        fetchCategoryRedux: () => dispatch(actions.fetchAllCategoriesStart()),
        editCategoryRedux: (data) => dispatch(actions.editCategory(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
