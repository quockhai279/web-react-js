import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from "../../../store/actions"
import './ProductRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import TableManageUser from './TableManageUser';


class ProductRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    state = {

    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, preState, snapshot) {
    }

    // handleOnchangeImage = async (event) => {
    //     let data = event.target.files
    //     let file = data[0]
    //     if (file) {
    //         let base64 = await CommonUtils.getBase64(file)
    //         console.log('file img', base64);
    //         let objectUrl = URL.createObjectURL(file)
    //         this.setState({
    //             previewImgURL: objectUrl,
    //             image: base64
    //         })
    //         console.log('check files:', objectUrl);
    //     }
    // }

    // openPreviewImage = () => {
    //     if (!this.state.previewImgURL) return
    //     this.setState({
    //         isOpen: true
    //     })
    // }


    render() {
        // let genders = this.state.genderArr
        // // let roles = this.state.roleArr
        // // let positions = this.state.positionArr
        // let { roleArr, positionArr } = this.state;
        // let { email, password, firstName,
        //     lastName, phoneNumber, address,
        //     gender, role, position, image } = this.state
        // let language = this.props.language
        // let isLoadingGenderReact = this.props.isLoadingGender
        return (
            <div className='product-redux-container'>
                <div className='title'>
                    Product Redux
                </div>
                <div className='product-redux-body'>
                    <div>Thêm mới sản phẩm</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {


        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRedux);
