import React from 'react'
import { Post } from '../Post'

export const Posts = ({ posts }) => {
	if (!posts.length) {
		return <p className='text-center'>Posts was here</p>
	}
	return posts.map((item, i) => <Post post={item} key={`Post ${i}`} />)
}
