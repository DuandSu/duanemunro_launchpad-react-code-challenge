import { 
    SET_PAGE
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