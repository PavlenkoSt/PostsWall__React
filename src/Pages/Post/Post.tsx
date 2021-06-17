import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Post = () => {
    const history = useHistory()
    const path = history.location.pathname.match(/\/Post\/(.+)/)

    useEffect(() => {
        if(path?.length){
            const id = path[1]
            // get post data here
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default Post
