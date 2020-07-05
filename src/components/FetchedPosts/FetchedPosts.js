import React from 'react'
import { Post } from '../Post'

export const FetchedPosts = ({ posts }) => {
	if (!posts.length) {
		return <button className='btn btn-primary'>Load</button>
	}
	return posts.map((item, i) => <Post post={item} key={`Post ${i}`} />)
}
