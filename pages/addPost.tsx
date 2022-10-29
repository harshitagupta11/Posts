import React from 'react'
import  AddPosts from '../components/AddPost'
import { IPost } from '../types'
import { AppContext } from '../context/AppContext'

export default function AddPost(){
    const value = React.useContext(AppContext);
    const {setPostlist, postList} = value
    console.log(postList)
    const addPost = async (e: React.FormEvent, formData: IPost) => {
        e.preventDefault()
        const post: IPost = {
          id: Math.floor(Math.random()*1000),
          userId: formData.userId,
          title: formData.title,
          body: formData.body,
        }
        setPostlist([post, ...postList])
      }
    
  return (
    <div>
        <AddPosts savePost={addPost} />
    </div>
  )
}
