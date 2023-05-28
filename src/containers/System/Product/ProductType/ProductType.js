import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import * as actions from '../../../../store/actions'
import 'react-image-lightbox/style.css';
import TableProductType from '../../Product/ProductType/TableProductType';
// import { getAllCategories } from '../../../../services/productService'

class ProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // vs react
            // categoriesArr: '',
            // vs redux
            categoriesRedux: [],


            nameVi: '',
            nameEn: '',
            categoryId: '',
            action: '',
            userEditId: '',


        }
    }

    async componentDidMount() {
        // vs react
        // try {
        //     let res = await getAllCategories('ALL')
        //     console.log('check res quoc khai', res);
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             categoriesArr: res.categories
        //         })
        //     }
        // } catch (e) {
        //     console.log(e);
        // }
        // vs redux
        this.props.fetchCategoryRedux()


    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listCategories !== this.props.listCategories) {
            let arrCategories = this.props.listCategories
            this.setState({
                categoriesRedux: arrCategories,
                categoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : ''
            })
        }
        if (prevProps.listProductType !== this.props.listProductType) {
            let arrCategories = this.props.listCategories
            this.setState({
                nameVi: '',
                nameEn: '',
                categoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : '',
                action: CRUD_ACTIONS.CREATE,
            })
        }


    }

    handleSaveProductType = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewProductType({
                valueVi: this.state.nameVi,
                valueEn: this.state.nameEn,
                categoryId: this.state.categoryId,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editProductTypeRedux({
                id: this.state.userEditId,
                valueVi: this.state.nameVi,
                valueEn: this.state.nameEn,
                categoryId: this.state.categoryId,

            })
        }
    }

    handleEditProductTypeFromParent = (productType) => {
        this.setState({
            //conSangCha
            nameEn: productType.valueEn,
            nameVi: productType.valueVi,
            categoryId: productType.categoryId,
            action: CRUD_ACTIONS.EDIT,
            userEditId: productType.id
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
        }, () => {
            console.log('check copyState', copyState);
        })
    }

    render() {
        let { nameVi, nameEn, categoryId, categoriesArr } = this.state
        let language = this.props.language
        let arrCategories = this.state.categoriesRedux
        return (
            <div className='product-redux-container'>
                <div className='title'>Product type manager</div>
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
                                {/* <select className='form-control'>
                                    {categoriesArr && categoriesArr.length > 0 &&
                                        categoriesArr.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select> */}
                                <select className='form-control'
                                    value={categoryId}
                                    onChange={(event) => { this.onChangeInput(event, 'categoryId') }}
                                >
                                    {arrCategories && arrCategories.length > 0 &&
                                        arrCategories.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className='col-12 my-3'>
                                <button
                                    className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                    onClick={() => this.handleSaveProductType()}
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
                                    handleEditProductTypeFromParentKey={this.handleEditProductTypeFromParent}
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
        listCategories: state.product.categories,
        listProductType: state.product.productType,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryRedux: () => dispatch(actions.fetchAllCategoriesStart()),
        createNewProductType: (data) => dispatch(actions.createNewProductType(data)),
        fetchAllProductTypeRedux: () => dispatch(actions.fetchAllProductType()),
        editProductTypeRedux: (data) => dispatch(actions.editProductType(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductType);
