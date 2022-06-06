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

export const setPage = (text) => ({
    type : SET_PAGE,
    payload: text
})

export const requestPost = (postArg, method = "GET", postInput = {userId: null, title: "", body: ""}) => (dispatch) => {
    dispatch({ type: REQUEST_POSTDATA_PENDING });
    const postURL = "https://jsonplaceholder.typicode.com/posts" + postArg;
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

export const requestZip = zipArg => (dispatch) => {
    dispatch({ type: REQUEST_ZIPDATA_PENDING });
    const zipURL = "http://api.zippopotam.us/us" + zipArg;
    fetch(zipURL, {})
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_ZIPDATA_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ZIPDATA_FAILED, payload: error}))
}

export const requestCountry = countryArg => (dispatch) => {
    dispatch({ type: REQUEST_COUNTRYDATA_PENDING });
    const countryURL = "https://countriesnow.space/api/v0.1/countries/info?returns=none" + countryArg;
    fetch(countryURL, {})
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_COUNTRYDATA_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_COUNTRYDATA_FAILED, payload: error}))
}

export const requestUniversity = universityArg => (dispatch) => {
    dispatch({ type: REQUEST_UNIVERSITYDATA_PENDING });
    const universityURL = "http://universities.hipolabs.com/search?country=" + universityArg;
    fetch(universityURL, {})
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_UNIVERSITYDATA_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_UNIVERSITYDATA_FAILED, payload: error}))
}