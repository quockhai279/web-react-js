import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss';
import { FormattedMessage } from 'react-intl';
import imgVSG from '../../../assets/imgProduct/news/ImgShoesVs.jpg'


class HandBook extends Component {

    render() {
        return (
            <section className='handbook-section'>
                <div className='handbook-container'>
                    <div className='handbook-section-header'>
                        <h2 className='handbook-title'>- Tin tức</h2>
                    </div>
                    <div id="list" className='handbook-section-content'>
                        <div className='item'>
                            <div className="item-img">
                                <a href='' className='post-overplay'></a>
                                <img src={imgVSG} />
                            </div>
                            <div className='item-title'>
                                <a className='item-title-content' href=''>KING SHOES - Hướng dẫn cách vệ sinh giày Sneaker !!!</a>
                                <div className='description'>
                                    <p>
                                        <strong>Hướng dẫn</strong> "8 bước cơ bản vệ sinh giày Sneaker".
                                        <strong> Cách vệ sinh giày vải trắng,da ,da lộn, tẩy ố trên vải</strong>
                                    </p>
                                </div>
                                <a className='item-title-link' href='more-link'>Xem thêm <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="item-img">
                                <a href='' className='post-overplay'></a>
                                <img src={imgVSG} />
                            </div>
                            <div className='item-title'>
                                <a className='item-title-content' href=''>KING SHOES - Hướng dẫn cách vệ sinh giày Sneaker !!!</a>
                                <div className='description'>
                                    <p>
                                        <strong>Hướng dẫn</strong> "8 bước cơ bản vệ sinh giày Sneaker".
                                        <strong> Cách vệ sinh giày vải trắng,da ,da lộn, tẩy ố trên vải</strong>
                                    </p>
                                </div>
                                <a className='item-title-link' href='more-link'>Xem thêm <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="item-img">
                                <a href='' className='post-overplay'></a>
                                <img src={imgVSG} />
                            </div>
                            <div className='item-title'>
                                <a className='item-title-content' href=''>KING SHOES - Hướng dẫn cách vệ sinh giày Sneaker !!!</a>
                                <div className='description'>
                                    <p>
                                        <strong>Hướng dẫn</strong> "8 bước cơ bản vệ sinh giày Sneaker".
                                        <strong> Cách vệ sinh giày vải trắng,da ,da lộn, tẩy ố trên vải</strong>
                                    </p>
                                </div>
                                <a className='item-title-link' href='more-link'>Xem thêm <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="item-img">
                                <a href='' className='post-overplay'></a>
                                <img src={imgVSG} />
                            </div>
                            <div className='item-title'>
                                <a className='item-title-content' href=''>KING SHOES - Hướng dẫn cách vệ sinh giày Sneaker !!!</a>
                                <div className='description'>
                                    <p>
                                        <strong>Hướng dẫn</strong> "8 bước cơ bản vệ sinh giày Sneaker".
                                        <strong> Cách vệ sinh giày vải trắng,da ,da lộn, tẩy ố trên vải</strong>
                                    </p>
                                </div>
                                <a className='item-title-link' href='more-link'>Xem thêm <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
