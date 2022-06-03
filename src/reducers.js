import { 
    SET_PAGE,
    REQUEST_POSTDATA_PENDING,
    REQUEST_POSTDATA_SUCCESS,
    REQUEST_POSTDATA_FAILED
} from './constants.js'


const initialPage = {
    page: ''
}

export const setPage = (state=initialPage, action={}) => {
    switch(action.type) {
        case SET_PAGE:
            return Object.assign({}, state, { page: action.payload });
        default:
            return state;
    }
}

const initialStatePostData = {
    isPending: false,
    postdata: [],
    error: ''
}

export const requestPostAll = (state=initialStatePostData, action={}) => {
    switch(action.type) {
        case REQUEST_POSTDATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_POSTDATA_SUCCESS:
            return Object.assign({}, state, { postdata: action.payload, isPending: false });
        case REQUEST_POSTDATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;        
    }
}