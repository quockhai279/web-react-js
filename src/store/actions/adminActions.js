import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService,
    getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService,

} from '../../services/userService'
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error:', e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('fetchPositionFailed error:', e);
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('fetchRoleFailed error:', e);
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user success")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed())
            console.log('saveUserFailed error:', e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            let res1 = await getTopDoctorHomeService('3')
            console.log('check res doctor res1', res1);
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch all user error !")
                dispatch(fetchAllUsersFailed())
            }
        } catch (e) {
            toast.error("Fetch all user error !")
            dispatch(fetchAllUsersFailed())
            console.log('fetchAllUsersFailed error:', e);
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED,
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed !")
                dispatch(deleteUsersSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Delete the user error !")
                dispatch(deleteUsersFailed())
            }
        } catch (e) {
            toast.error("Delete the user error !")
            dispatch(deleteUsersFailed())
            console.log('deleteUsersFailed error:', e);
        }
    }
}

export const deleteUsersSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUsersFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed !")
                dispatch(editUsersSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Update the user error !")
                dispatch(editUsersFailed())
            }
        } catch (e) {
            toast.error("Update the user error !")
            dispatch(editUsersFailed())
            console.log('EditUsersFailed error:', e);
        }
    }
}

export const editUsersSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUsersFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('10')
            // console.log('check res fetchtopdoctor', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            })
        }
    }
}

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED:', e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
        }
    }
}

export const saveDetailDoctors = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("Save info detail Doctor succeed !")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Save info detail Doctor error !")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            toast.success("Save info detail Doctor succeed !")
            console.log('SAVE_DETAIL_DOCTOR_FAILED:', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME")
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED:', e);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            })
        }
    }
}