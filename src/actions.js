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

export const requestPost = (postArg, method = "GET", postInput = {userId: null, title: "", body: ""}) => (dispatch) => {
    dispatch({ type: REQUEST_POSTDATA_PENDING });
    const postURL = "https://jsonplaceholder.typicode.com/posts" + postArg;
    console.log("postURL = " + postURL);
    console.log("method = " + method)
    if (method === "GET") {
        fetch(postURL, {})
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
    }
    else if (method === "DELETE") {
        fetch(postURL, {method: method})
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
    }
    else {
        fetch(postURL, {
            method: method,
            body: JSON.stringify({
                userId: postInput.userId,
                title: postInput.title,
                body: postInput.body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response=> response.json())
            .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
            .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
    }
}

// export const requestPostSearch = (postID) => (dispatch) => {
//     dispatch({ type: REQUEST_POSTDATA_PENDING});
//     console.log("postURL" + postURL);
//     fetch(postURL)
//         .then(response=> response.json())
//         .then(data => dispatch({ type: REQUEST_POSTDATA_SUCCESS, payload: data}))
//         .catch(error => dispatch({ type: REQUEST_POSTDATA_FAILED, payload: error}))
// }