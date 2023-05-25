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
            size: '',
            category: '',


            action: '',
            productEditId: '',
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                name: '',
                price: '',
                quantity: '',
                description: '',
                image: '',
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
        let { name, price, quantity, description, brand, size, category, image, } = this.state

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
                                <label>Giá khuyến mãi</label>
                                <input className='form-control' type='text'
                                    value={price}
                                    onChange={(event) => { this.onChangeInput(event, 'price') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Giá sản phẩm</label>
                                <input className='form-control' type='text'
                                // value={price}
                                // onChange={(event) => { this.onChangeInput(event, 'price') }}
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
                                <label>Kích cỡ</label>
                                <input className='form-control' type='text'
                                    value={size}
                                    onChange={(event) => { this.onChangeInput(event, 'size') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Thể loại</label>
                                <input className='form-control' type='text'
                                    value={category}
                                    onChange={(event) => { this.onChangeInput(event, 'category') }}
                                />
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
        // language: state.app.language,
        listProducts: state.product.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewProduct: (data) => dispatch(actions.createNewProduct(data)),
        fetchProductRedux: () => dispatch(actions.fetchAllProductsStart()),
        editAProductRedux: (data) => dispatch(actions.editAProduct(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRedux);
