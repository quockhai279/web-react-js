import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';
import { FormattedMessage } from 'react-intl';

import imgShoes1 from '../../../assets/imgProduct/jordan-1-mid-obsidian.jpeg'
import imgShoes2 from '../../../assets/imgProduct/nike-air-force-1-shadow-multicolor.jpeg'
import imgShoes3 from '../../../assets/imgProduct/sneaker-super-star.jpeg'
import imgShoes4 from '../../../assets/imgProduct/nike-air-force.jpeg'
import imgShoes5 from '../../../assets/imgProduct/SNEAKER-AIR-FORCE.jpg'
import imgShoes6 from '../../../assets/imgProduct/jordan-1-mid-obsidian.jpeg'


class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Check-in Highlight Sneaker || Nike commercial
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/UbpuZCB3x9k"
                            title="Nike Commercial | Off White Air Jordan 1 UNC B-roll"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <div className='item-img'>
                            <img src={imgShoes5} />
                            <img src={imgShoes4} />
                            <img src={imgShoes1} />
                            <img src={imgShoes2} />
                            <img src={imgShoes6} />
                            <img src={imgShoes5} />
                            <img src={imgShoes3} />
                            <img src={imgShoes4} />
                            <img src={imgShoes6} />
                        </div>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
