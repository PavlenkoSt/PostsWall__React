import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import DAL from '../../API/api'
import { getPost } from '../../Redux/postsReducer'
import { targetPostSelector } from '../../Redux/selectors/postsSelectors'

const Post = () => {
    const history = useHistory()
    const path = history.location.pathname.match(/\/Post\/(.+)/)
    const dispatch = useDispatch()
    const targetPost = useSelector(targetPostSelector)

    useEffect(() => {
        if(path?.length){
            const id = path[1]
            dispatch(getPost(id))
        }
    }, [])

    return (
        <div>
            { targetPost ? <>
                <h2>{ targetPost?.title }</h2>
                <p>{ targetPost?.content }</p>
            </> : <>
                Ошибка, пост по данному адресу не найден!
            </>}
        </div>
    )
}

export default Post
