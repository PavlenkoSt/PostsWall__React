import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPost } from '../../Redux/postsReducer'
import { targetPostSelector } from '../../Redux/selectors/postsSelectors'
import s from './Post.module.scss'

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
        <div className={s.page}>
            { targetPost ? <>
                <h2 className={s.h}>{ targetPost?.title }</h2>
                <div className={s.author}> Author: <span>{ targetPost?.author || 'unknown' }</span></div>
                <p className={s.content}>{ targetPost?.content }</p>
            </> : <>
                Ошибка, пост по данному адресу не найден!
            </>}
        </div>
    )
}

export default Post
