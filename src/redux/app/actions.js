import { HIDE_LOADER, HIDER_ALERT, SHOW_ALERT, SHOW_LOADER } from './actionTypes'

export const showLoader = () => {
	return {
		type: SHOW_LOADER,
	}
}

export const hideLoader = () => {
	return {
		type: HIDE_LOADER,
	}
}

export const showAlert = text => {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text,
		})

		setTimeout(() => {
			dispatch(hideAlert())
		}, 2000)
	}
}

export const hideAlert = () => {
	return {
		type: HIDER_ALERT,
	}
}
