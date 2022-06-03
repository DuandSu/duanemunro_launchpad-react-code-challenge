import { 
    SET_PAGE
} from './constants.js'

export const setPage = (text) => ({
    type : SET_PAGE,
    payload: text
})