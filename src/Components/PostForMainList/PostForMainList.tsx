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

const PostForMainList: FC<PostForMainListPropsType> = ({ id, author, content, title }) => {


    return (
        <NavLink to='/' className={s.post}>
            {/* Сделать запрос за картинкой и отобразить ее здесь */}
            <div className={s.imgCont}>
                <img src="https://place-hold.it/600x300/666/fff.png/000" alt="post image" />
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.author}>Author: {author}</div>
            <div className={s.content}>{content}</div>
        </NavLink>
    )
}

export default PostForMainList
