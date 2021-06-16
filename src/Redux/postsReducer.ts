import { ActionTypes } from './reduxStore'
import { ThunkAction } from 'redux-thunk'
import { AnyAction, Store } from 'redux'
import DAL from '../API/api'

const actionsTypes = {
    SET_POSTS_SUCCESS: 'SET_POSTS_SUCCESS'
}

const initialValue = {
    posts: [] as Array<PostsType>
}

const postsReducer = (state: InitialValueType = initialValue, action: ActionType) => {
    switch(action.type){
        case actionsTypes.SET_POSTS_SUCCESS: {
            return {
                ...state, 
                posts: action.posts
            }
        }
        default: return state
    }
}

export const postsActions = {
    setPostsSuccess: (posts: Array<PostsType>) => ({ type: actionsTypes.SET_POSTS_SUCCESS, posts } as const)
}

export const getPosts = (): ThunkType => async dispatch => {
    const posts = await DAL.posts.getPosts()
    if(posts.length){
        dispatch(postsActions.setPostsSuccess(posts))
    }
}

export default postsReducer

type InitialValueType = typeof initialValue
type ActionType = ActionTypes<typeof postsActions>

type ThunkType = ThunkAction<void, Store, unknown, AnyAction>

export type PostsType = {
    __v: number
    _id: string
    title: string
    content: string
    author: string
}