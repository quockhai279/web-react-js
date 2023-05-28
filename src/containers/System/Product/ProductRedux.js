import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from "../../../store/actions"
import './ProductRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageProduct from './TableManageProduct';



class ProductRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            previewImgURL: '',

            name: '',
            price: '',
            quantity: '',
            description: '',
            image: '',
            brand: '',
            categoryId: '',
            productTypeId: '',

            // discount: '',

            action: '',
            productEditId: '',

            categoriesRedux: [],
            productTypeRedux: [],

        }
    }

    async componentDidMount() {
        this.props.fetchAllCategoryRedux();
        this.props.fetchAllProductType();
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listCategories !== this.props.listCategories) {
            let arrCategories = this.props.listCategories
            this.setState({
                categoriesRedux: arrCategories,
                // categoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : ''
            })
        }
        if (prevProps.listProductType !== this.props.listProductType) {
            let arrProductType = this.props.listProductType
            this.setState({
                productTypeRedux: arrProductType,
                // productTypeId: arrProductType && arrProductType.length > 0 ? arrProductType[0].id : ''
            })
        }
        if (prevProps.listProducts !== this.props.listProducts) {
            let arrCategories = this.props.listCategories
            let arrProductType = this.props.listProductType
            this.setState({
                name: '',
                price: '',
                quantity: '',
                description: '',
                image: '',
                brand: '',
                categoryId: '',
                productTypeId: '',
                // categoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : '',
                // productTypeId: arrProductType && arrProductType.length > 0 ? arrProductType[0].id : '',
                previewImgURL: '',
                action: CRUD_ACTIONS.CREATE,
            })
        }
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                image: base64
            })
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return
        this.setState({
            isOpen: true
        })
    }

    handleSaveProduct = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux create product action
            this.props.createNewProduct({
                name: this.state.name,
                price: this.state.price,
                quantity: this.state.quantity,
                description: this.state.description,
                image: this.state.image,
                brand: this.state.brand,
                categoryId: this.state.categoryId,
                productTypeId: this.state.productTypeId,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editAProductRedux({
                id: this.state.productEditId,
                name: this.state.name,
                price: this.state.price,
                quantity: this.state.quantity,
                description: this.state.description,
                image: this.state.image,
                brand: this.state.brand,
                categoryId: this.state.categoryId,
                productTypeId: this.state.productTypeId,
            })
        }
    }

    handleEditProductFromParent = (product) => {
        let imageBuffer64 = '';
        if (product.image) {
            imageBuffer64 = new Buffer(product.image, 'base64').toString('binary')
        }
        this.setState({
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            image: '',
            brand: product.brand,
            categoryId: product.categoryId,
            productTypeId: product.productTypeId,
            previewImgURL: imageBuffer64,
            action: CRUD_ACTIONS.EDIT,
            productEditId: product.id
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['name', 'price', 'quantity', 'description']
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
        let { name, price, quantity, description, brand, categoryId, productTypeId, } = this.state
        let language = this.props.language
        let arrCategories = this.state.categoriesRedux
        let arrProductType = this.state.productTypeRedux

        console.log('check state product:', this.state);
        return (
            <div className='product-redux-container'>
                <div className='title'>Product Redux</div>
                <div className='product-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>Thêm mới sản phẩm</div>
                            {/* <div className='col-12'>{isLoadingGenderReact === true ? 'Loading genders' : ''}</div> */}
                            <div className='col-3'>
                                <label>Tên sản phảm</label>
                                <input className='form-control' type='text'
                                    value={name}
                                    onChange={(event) => { this.onChangeInput(event, 'name') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Thương hiệu</label>
                                <input className='form-control' type='text'
                                    value={brand}
                                    onChange={(event) => { this.onChangeInput(event, 'brand') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Giá</label>
                                <input className='form-control' type='text'
                                    value={price}
                                    onChange={(event) => { this.onChangeInput(event, 'price') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Số lượng</label>
                                <input className='form-control' type='text'
                                    value={quantity}
                                    onChange={(event) => { this.onChangeInput(event, 'quantity') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Danh mục</label>
                                <select className='form-control'
                                    value={categoryId}
                                    onChange={(event) => { this.onChangeInput(event, 'categoryId') }}
                                >
                                    <option>Choose...</option>
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
                            <div className='col-3'>
                                <label>Thể loại</label>
                                <select className='form-control'
                                    value={productTypeId}
                                    onChange={(event) => { this.onChangeInput(event, 'productTypeId') }}
                                >
                                    <option>Choose...</option>
                                    {arrProductType && arrProductType.length > 0 &&
                                        arrProductType.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}

                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Mô tả</label>
                                <input className='form-control' type='text'
                                    value={description}
                                    onChange={(event) => { this.onChangeInput(event, 'description') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.Image" /></label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}

                                    />
                                    <label className='label-upload' htmlFor='previewImg'><FormattedMessage id="manage-user.upLoadImd" /><i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 my-3'>
                                <button
                                    className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                    onClick={() => this.handleSaveProduct()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ?
                                        <FormattedMessage id="manage-user.Edit" />
                                        :
                                        <FormattedMessage id="manage-user.Save" />
                                    }
                                </button>
                            </div>

                            <div className='col-12 mb-5'>
                                <TableManageProduct
                                    handleEditProductFromParentKey={this.handleEditProductFromParent}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                {
                    this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listProducts: state.product.products,
        listCategories: state.product.categories,
        listProductType: state.product.productType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewProduct: (data) => dispatch(actions.createNewProduct(data)),
        fetchProductRedux: () => dispatch(actions.fetchAllProductsStart()),
        editAProductRedux: (data) => dispatch(actions.editAProduct(data)),
        fetchAllCategoryRedux: () => dispatch(actions.fetchAllCategoriesStart()),
        fetchAllProductType: () => dispatch(actions.fetchAllProductType())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRedux);
