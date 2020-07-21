import { CREATE_POST, FETCH_POSTS } from './actionTypes'
import { hideLoader, showAlert, showLoader } from '../app/actions'

export const createPost = post => {
	return {
		type: CREATE_POST,
		payload: post,
	}
}

export const fetchPosts = () => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
			const posts = await response.json()
			dispatch({
				type: FETCH_POSTS,
				payload: posts,
			})
		} catch (e) {
			dispatch(showAlert(`Something went wrong`))
		}
		dispatch(hideLoader())
	}
}
