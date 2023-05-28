import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter';
import productImg2 from "../../../assets/imgProduct/product/nike-air-force.jpeg"
import productImg1 from "../../../assets/imgProduct/product/nike-air-force-1-shadow-multicolor.jpeg"
import Slider from "react-slick";
import './ProductDetail.scss'
import { getDetailInfoProduct } from '../../../services/productService'
import { LANGUAGES } from '../../../utils';
class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nav1: null,
            nav2: null,
            detailProduct: {}
        }
    }

    async componentDidMount() {
        // this.setState({
        //     nav1: this.slider1,
        //     nav2: this.slider2
        // });
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getDetailInfoProduct(id)
            console.log('check res detail product:', res);
            if (res && res.errCode === 0) {
                this.setState({
                    detailProduct: res.data
                })
            }
        }
    }

    returnToShop = () => {
        if (this.props.history) {
            this.props.history.push(`/Shop`)
        }
    }

    render() {
        console.log('check state product detail aaaaaa: ', this.state);
        let { language } = this.props
        let { detailProduct } = this.state
        let nameVi = '', nameEn = '', nameTypeVi = '', nameTypeEn = '';
        if (detailProduct && detailProduct.categoryData) {
            nameVi = `${detailProduct.categoryData.valueVi}`
            nameEn = `${detailProduct.categoryData.valueEn}`
        }
        if (detailProduct && detailProduct.productTypeData) {
            nameTypeVi = `${detailProduct.productTypeData.valueVi}`
            nameTypeEn = `${detailProduct.productTypeData.valueEn}`
        }
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='background-product-detail'>
                    <div className='product-detail'>
                        <div className='product-detail-container'>
                            <div className='col-md-2 '>
                                <Slider className='slider-nav-img'
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={3}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows={false}
                                    vertical={true}
                                >
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                    <div className='slider-nav-1'>
                                        <img src={productImg1} />
                                    </div>
                                </Slider>
                            </div>
                            <div className='col-md-5 img-product'>
                                <Slider className='slider-for-img'
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                    arrows={false}
                                >
                                    <div>
                                        <img src={productImg2} />
                                    </div>
                                    <div>
                                        <img src={productImg1} />
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                            </div>
                            <div className='product-detail-container-title col-md-5'>
                                <div className='product-title-brand text-uppercase'>
                                    <ol className='breadcrumb-list'>
                                        <li className='breadcrumb-item'>
                                            <a className='breadcrumb-link' onClick={() => this.returnToShop()}>Trang chủ</a>
                                        </li>
                                        <li className='breadcrumb-item'>
                                            <a className='breadcrumb-link'>{language === LANGUAGES.VI ? nameVi : nameEn}</a>
                                        </li>
                                        <li className='breadcrumb-item'>
                                            <a className='breadcrumb-link'>{language === LANGUAGES.VI ? nameTypeVi : nameTypeEn}</a>
                                        </li>
                                        <li className='breadcrumb-item'>
                                            <a className=''><strong>Thương hiệu:</strong> {detailProduct.brand}</a>
                                        </li>
                                    </ol>
                                </div>
                                <h1 className='product-title display-5'>{detailProduct.name}</h1>
                                <div className='star fw-bolder'>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <h3 className='product-price display-5 fw-bold my-3'>{detailProduct.price} đ</h3>
                                <div className='size-shoes mb-4'>
                                    <div className='list-size-container'>
                                        <button className='btn btn-outline-secondary p-size'>36</button>
                                        <button className='btn btn-outline-secondary p-size'>40</button>
                                        <button className='btn btn-outline-secondary p-size'>43</button>
                                        <button className='btn btn-outline-secondary p-size'>44</button>
                                        <button className='btn btn-outline-secondary p-size'>44</button>
                                        <button className='btn btn-outline-secondary p-size'>44</button>
                                        <button className='btn btn-outline-secondary p-size'>44</button>
                                    </div>
                                </div>
                                <div className='custom-quantity-container display-5 fw-bold my-4'>
                                    <button className='button-quantity'>-</button>
                                    <input className='input-quantity' type='text' value={1} />
                                    <button className='button-quantity'>+</button>
                                </div>
                                <p className='description-text'>
                                    {detailProduct.description}
                                </p>
                                <div className='button-productDetail'>
                                    <button className='btn-product btn btn-outline-dark px-5 py-3'>Mua ngay</button>
                                    <button className='btn-product btn btn-warning px-5 py-3'>
                                        <i className="productDetail-icon fa-solid fa-cart-shopping"></i>
                                        <span>Them vao gio</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=''>

                        </div>
                    </div>
                    <div className='product-detail-mid'>
                        <div className='product-detail-mid-container'>
                            <div className=''>
                                <div className=''>Sản phẩm liên quan</div>
                            </div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
