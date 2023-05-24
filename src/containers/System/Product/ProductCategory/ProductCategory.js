import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import * as actions from '../../../../store/actions'
import './ProductCategory.scss'
import 'react-image-lightbox/style.css';
import TableProductCategory from '../../Product/ProductCategory/TableProductCategory';



class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeCategory: '',
            type: '',
            nameVi: '',
            nameEn: '',

            action: '',

        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listCategories !== this.props.listCategories) {
            this.setState({
                action: CRUD_ACTIONS.CREATE,
                codeCategory: '',
                type: '',
                nameVi: '',
                nameEn: '',
            })
        }


    }

    handleSaveCategory = () => {
        // let isValid = this.checkValidateInput()
        // if (isValid === false) return
        // let { action } = this.state
        // if (action === CRUD_ACTIONS.CREATE) {
        //     //fire redux create product action
        //     this.props.createNewProduct({
        //         name: this.state.name,
        //         price: this.state.price,
        //         quantity: this.state.quantity,
        //         description: this.state.description,
        //         image: this.state.image,
        //     })
        // }
        // if (action === CRUD_ACTIONS.EDIT) {
        //     this.props.editAProductRedux({
        //         id: this.state.productEditId,
        //         name: this.state.name,
        //         price: this.state.price,
        //         quantity: this.state.quantity,
        //         description: this.state.description,
        //         image: this.state.image,
        //     })
        // }
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        //fire redux action
        this.props.createNewCategory({
            // key: input state 
            keyMap: this.state.codeCategory,
            type: this.state.type,
            valueEn: this.state.nameEn,
            valueVi: this.state.nameVi,
        })

    }

    handleEditProductCategoryFromParent = (product) => {

        this.setState({
            // name: product.name,
            // price: product.price,
            // quantity: product.quantity,
            // description: product.description,
            // image: '',
            // action: CRUD_ACTIONS.EDIT,
            // productEditId: product.id
        })
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
        let { codeCategory, type, nameVi, nameEn } = this.state

        return (
            <div className='product-redux-container'>
                <div className='title'>Product Category</div>
                <div className='product-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>Thêm mới danh mục sản phảm</div>
                            <div className='col-3'>
                                <label>Kiểu danh mục</label>
                                <input className='form-control' type='text'
                                    value={type}
                                    onChange={(event) => { this.onChangeInput(event, 'type') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Mã danh mục</label>
                                <input className='form-control' type='text'
                                    value={codeCategory}
                                    onChange={(event) => { this.onChangeInput(event, 'codeCategory') }}
                                />
                            </div>
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
                                    {this.state.action === CRUD_ACTIONS.EDIT ?
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
