import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Redux/postsReducer'
import { postsSelector } from '../../Redux/selectors/postsSelectors'

const Main = () => {
    const posts = useSelector(postsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className='container'>
            <div>

            </div>
        </div>
    )
}

export default Main
