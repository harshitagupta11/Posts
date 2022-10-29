import * as React from 'react'
import { IPost } from '../types'

type Props = {
  post: IPost
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>{post.title}</h1>
        <p className='Card--body-text'>{post.body}</p>
      </div>
    </div>
  )
}

export default Post