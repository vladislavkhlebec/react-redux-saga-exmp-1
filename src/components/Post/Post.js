import React from 'react'

export const Post = ({ post }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{post.title}</h5>
			</div>
		</div>
	)
}
