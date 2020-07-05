import React from 'react'
import { FetchedPosts, PostForm, Posts } from './components'

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<PostForm />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<h2>Synchronize posts</h2>
					<Posts posts={[]} />
				</div>
				<div className='col'>
					<h2>Asynchronous posts</h2>
					<FetchedPosts posts={[]} />
				</div>
			</div>
		</div>
	)
}

export default App
