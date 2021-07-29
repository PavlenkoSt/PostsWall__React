import { ActionTypes } from './reduxStore'
import { ThunkAction } from 'redux-thunk'
import { AnyAction, Store } from 'redux'
import DAL from '../API/api'

const actionsTypes = {
    SET_POSTS_SUCCESS: 'SET_POSTS_SUCCESS',
    SET_TARGET_POST_SUCCESS: 'SET_TARGET_POST_SUCCESS'
}

const initialValue = {
    posts: [] as Array<PostType>,
    targetPost: null as PostType | null
}

const postsReducer = (state: InitialValueType = initialValue, action: any) => {
    switch(action.type){
        case actionsTypes.SET_POSTS_SUCCESS: {
            return {
                ...state, 
                posts: action.posts
            }
        }
        case actionsTypes.SET_TARGET_POST_SUCCESS: {
            return {
                ...state,
                targetPost: action.post
            }
        }
        default: return state
    }
}

export const postsActions = {
    setPostsSuccess: (posts: Array<PostType>) => ({ type: actionsTypes.SET_POSTS_SUCCESS, posts }),
    setTargetPostSuccess: (post: PostType) => ({ type: actionsTypes.SET_TARGET_POST_SUCCESS, post })
}

export const getPosts = (): ThunkType => async dispatch => {
    const posts: Array<PostType> = await DAL.posts.getPosts()
    if(posts.length){
        dispatch(postsActions.setPostsSuccess(posts))
    }
}

export const getPost = (id: string): ThunkType => async dispatch => {
    const post: PostType = await DAL.posts.getPost(id)
    console.log(post);
    
    if(post){
        dispatch(postsActions.setTargetPostSuccess(post))
    }
}

export default postsReducer

type InitialValueType = typeof initialValue
type ActionType = ActionTypes<typeof postsActions>

type ThunkType = ThunkAction<void, Store, unknown, AnyAction>

export type PostType = {
    __v: number
    _id: string
    title: string
    content: string
    author: string
    picture?: string
}