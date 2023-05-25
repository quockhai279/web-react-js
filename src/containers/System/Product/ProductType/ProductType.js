import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import * as actions from '../../../../store/actions'
import 'react-image-lightbox/style.css';
import TableProductType from '../../Product/ProductType/TableProductType';
import { getAllCategories } from '../../../../services/productService'

class ProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // action: '',
            // categoryEditId: ''
            categoriesArr: '',

            nameVi: '',
            nameEn: '',
            categoryId: '',


        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCategories('ALL')
            console.log('check res quoc khai', res);
            if (res && res.errCode === 0) {
                this.setState({
                    categoriesArr: res.categories
                })
            }
        } catch (e) {
            console.log(e);
        }

    }

    componentDidUpdate(prevProps, preState, snapshot) {
        // if (prevProps.listCategories !== this.props.listCategories) {
        //     this.setState({
        //         codeCategory: '',
        //         type: '',
        //         nameVi: '',
        //         nameEn: '',
        //         action: CRUD_ACTIONS.CREATE,

        //     })
        // }


    }

    handleSaveCategory = () => {
        // let isValid = this.checkValidateInput()
        // if (isValid === false) return
        // let { action } = this.state
        // if (action === CRUD_ACTIONS.CREATE) {
        //     this.props.createNewCategory({
        //         // key: input state 
        //         keyMap: this.state.codeCategory,
        //         type: this.state.type,
        //         valueEn: this.state.nameEn,
        //         valueVi: this.state.nameVi,
        //     })
        // }
        // if (action === CRUD_ACTIONS.EDIT) {
        //     this.props.editCategoryRedux({
        //         id: this.state.categoryEditId,
        //         keyMap: this.state.codeCategory,
        //         type: this.state.type,
        //         valueEn: this.state.nameEn,
        //         valueVi: this.state.nameVi,
        //     })
        // }
    }

    handleEditProductCategoryFromParent = (category) => {
        // this.setState({
        //     //conSangCha
        //     nameEn: category.valueEn,
        //     nameVi: category.valueVi,
        //     action: CRUD_ACTIONS.EDIT,
        //     categoryEditId: category.id
        // })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ["codeCategory", "type", "nameVi", "nameEn"]
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
        let { nameVi, nameEn, categoryId, categoriesArr } = this.state
        let language = this.props.language
        return (
            <div className='product-redux-container'>
                <div className='title'>Product category manager</div>
                <div className='product-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>Thêm mới loại sản phảm</div>
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
                            <div className='col-3'>
                                <label>Danh mục</label>
                                <select className='form-control'>
                                    {categoriesArr && categoriesArr.length > 0 &&
                                        categoriesArr.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select>
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
                                <TableProductType
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductType);
