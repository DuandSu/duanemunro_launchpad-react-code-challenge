import { 
    SET_PAGE,
    REQUEST_POSTDATA_PENDING,
    REQUEST_POSTDATA_SUCCESS,
    REQUEST_POSTDATA_FAILED,
    REQUEST_ZIPDATA_PENDING,
    REQUEST_ZIPDATA_SUCCESS,
    REQUEST_ZIPDATA_FAILED,
    REQUEST_COUNTRYDATA_PENDING,
    REQUEST_COUNTRYDATA_SUCCESS,
    REQUEST_COUNTRYDATA_FAILED,
    REQUEST_UNIVERSITYDATA_PENDING,
    REQUEST_UNIVERSITYDATA_SUCCESS,
    REQUEST_UNIVERSITYDATA_FAILED
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

export const requestPost = (state=initialStatePostData, action={}) => {
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

const initialStateZipData = {
    isPending: false,
    isError: false,
    zipdata: [],
    error: ''
}

export const requestZip = (state=initialStateZipData, action={}) => {
    switch(action.type) {
        case REQUEST_ZIPDATA_PENDING:
            return Object.assign({}, state, { isPending: true, isError: false });
        case REQUEST_ZIPDATA_SUCCESS:
            return Object.assign({}, state, { zipdata: action.payload, isPending: false, isError: false });
        case REQUEST_ZIPDATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false, isError: true });
        default:
            return state;        
    }
}

const initialStateCountryData = {
    isPending: false,
    isError: false,
    countrydata: [],
    error: ''
}

export const requestCountry = (state=initialStateCountryData, action={}) => {
    switch(action.type) {
        case REQUEST_COUNTRYDATA_PENDING:
            return Object.assign({}, state, { isPending: true, isError: false });
        case REQUEST_COUNTRYDATA_SUCCESS:
            return Object.assign({}, state, { countrydata: action.payload, isPending: false, isError: false });
        case REQUEST_COUNTRYDATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false, isError: true });
        default:
            return state;        
    }
}

const initialStateUniversityData = {
    isPending: false,
    isError: false,
    universitydata: [],
    error: ''
}

export const requestUniversity = (state=initialStateUniversityData, action={}) => {
    switch(action.type) {
        case REQUEST_UNIVERSITYDATA_PENDING:
            return Object.assign({}, state, { isPending: true, isError: false });
        case REQUEST_UNIVERSITYDATA_SUCCESS:
            return Object.assign({}, state, { universitydata: action.payload, isPending: false, isError: false });
        case REQUEST_UNIVERSITYDATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false, isError: true });
        default:
            return state;        
    }
}