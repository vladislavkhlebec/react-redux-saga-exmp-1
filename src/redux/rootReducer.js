import { combineReducers } from 'redux'
import { postsReducer } from './posts/postsReducer'
import { appReducer } from './app/app.reducer'

export const rootReducer = combineReducers({
	posts: postsReducer,
	app: appReducer,
})
