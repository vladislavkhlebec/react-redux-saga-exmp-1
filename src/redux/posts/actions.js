import { CREATE_POST, FETCH_POSTS, REQUEST_POSTS } from './actionTypes'
import { hideLoader, showAlert, showLoader } from '../app/actions'

export const createPost = post => {
	return {
		type: CREATE_POST,
		payload: post,
	}
}

export const fetchPosts = () => {
	return {
		type: REQUEST_POSTS,
	}
	// return async dispatch => {
	// 	try {
	// 		dispatch(showLoader())
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	// 		const posts = await response.json()
	// 		dispatch({
	// 			type: FETCH_POSTS,
	// 			payload: posts,
	// 		})
	// 	} catch (e) {
	// 		dispatch(showAlert(`Something went wrong`))
	// 	}
	// 	dispatch(hideLoader())
	// }
}
