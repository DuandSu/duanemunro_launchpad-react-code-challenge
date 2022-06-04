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

export const requestPost = postArg => (dispatch) => {
    dispatch({ type: REQUEST_POSTDATA_PENDING });
    console.log("requestPost = " + postArg);
    const postURL = "https://jsonplaceholder.typicode.com/posts" + postArg;
    console.log("postURL = " + postURL)
    fetch(postURL)
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
}

// export const requestPostSearch = (postID) => (dispatch) => {
//     dispatch({ type: REQUEST_POSTDATA_PENDING});
//     console.log("postURL" + postURL);
//     fetch(postURL)
//         .then(response=> response.json())
//         .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
//         .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
// }