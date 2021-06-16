import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Redux/postsReducer'
import { postsSelector } from '../../Redux/selectors/postsSelectors'
import PostForMainList from '../../Components/PostForMainList/PostForMainList'
import s from './Main.module.scss'

const Main = () => {
    const dispatch = useDispatch()
    const posts = useSelector(postsSelector)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const renderPosts = posts.map(post => <PostForMainList/>)

    return (
        <div className='container'>
            <div className={s.header}>
                <h2>Последние посты</h2>
            </div>
            <div className={s.posts}>
                { renderPosts.length ? renderPosts : <p>Постов пока нет!</p> }
            </div>
        </div>
    )
}

export default Main
