import { 
    SET_PAGE,
    REQUEST_POSTDATA_PENDING,
    REQUEST_POSTDATA_SUCCESS,
    REQUEST_POSTDATA_FAILED
} from './constants.js'

export const setPage = (text) => ({
    type : SET_PAGE,
    payload: text
})

export const requestPostAll = () => (dispatch) => {
    dispatch({ type: REQUEST_POSTDATA_PENDING});
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
}