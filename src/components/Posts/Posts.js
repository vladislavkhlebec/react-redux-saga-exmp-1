import React from 'react'
import { Post } from '../Post'
import { connect } from 'react-redux'

const Posts = ({ posts }) => {
	if (!posts.length) {
		return <p className='text-center'>Posts was here</p>
	}
	return posts.map((item, i) => <Post post={item} key={`Post ${i}`} />)
}

const mapStateToProps = state => ({
	posts: state.posts.posts,
})

export default connect(mapStateToProps, null)(Posts)
