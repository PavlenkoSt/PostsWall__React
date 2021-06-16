import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { postsSelector } from '../Redux/selectors/postsSelectors'

const Main = () => {
    const posts = useSelector(postsSelector)

    useEffect(() => {
        console.log(posts);
        
    }, [])

    return (
        <div className='container'>
            Hello main
        </div>
    )
}

export default Main
