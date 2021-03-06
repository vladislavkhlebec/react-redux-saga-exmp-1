import { HIDE_LOADER, HIDER_ALERT, SHOW_ALERT, SHOW_LOADER } from './actionTypes'

const initialState = {
	loading: false,
	alert: null,
}
export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER: {
			return {
				...state,
				loading: true,
			}
		}
		case HIDE_LOADER: {
			return {
				...state,
				loading: false,
			}
		}
		case SHOW_ALERT: {
			return {
				...state,
				alert: action.payload,
			}
		}
		case HIDER_ALERT: {
			return {
				...state,
				alert: null,
			}
		}
		default: {
			return state
		}
	}
}
