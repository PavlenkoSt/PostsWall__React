import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './PostForMainList.module.scss'

type PostForMainListPropsType = {
    id: string
    author: string
    content: string
    title: string
    picture?: string
}

const PostForMainList: FC<PostForMainListPropsType> = ({ id, author, content, title, picture }) => {
    return (
        <NavLink to={`/Post/${id}`} className={s.post}>
            <div className={s.imgCont}>
                <img 
                    src={
                        picture 
                        ? `http://localhost:8888/${picture}` 
                        : 'https://place-hold.it/600x300/666/fff.png/000'
                    } 
                    alt="post image" 
                />
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.author}>Author: {author}</div>
            {/* Сделать контент на 2 строки и твроеточие */}
            <div className={s.content}>{content}</div>
        </NavLink>
    )
}

export default PostForMainList
