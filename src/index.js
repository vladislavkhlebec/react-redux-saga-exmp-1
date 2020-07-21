import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { rootReducer } from './redux/rootReducer'
import { forbiddenWordsMiddleware } from './redux/posts/middleware'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

saga.run(sagaWatcher)

render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
