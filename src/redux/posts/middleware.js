import { CREATE_POST } from './actionTypes'
import { showAlert } from '../app/actions'

const forbidden = ['fuck', 'php', 'spam']

export function forbiddenWordsMiddleware({ dispatch }) {
	return function(next) {
		return function(action) {
			if (action.type === CREATE_POST) {
				const found = forbidden.filter(w => action.payload.title.includes(w))
				if (found.length) {
					return dispatch(showAlert('You are use forbidden words! Clean this!'))
				}
			}
			return next(action)
		}
	}
}
