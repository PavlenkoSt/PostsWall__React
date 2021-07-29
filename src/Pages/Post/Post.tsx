import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import DAL from '../../API/api'

const Post = () => {
    const history = useHistory()
    const path = history.location.pathname.match(/\/Post\/(.+)/)

    const getPost = async () => {
        if(path?.length){
            const id = path[1]
            const data = await DAL.posts.getPost(id)
            console.log(data)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            post
        </div>
    )
}

export default Post
