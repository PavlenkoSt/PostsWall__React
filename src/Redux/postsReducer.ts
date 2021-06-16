import { ActionTypes } from './reduxStore'

const actionsTypes = {
    SET_POSTS_SUCCESS: 'SET_POSTS_SUCCESS'
}

const initialValue = {
    posts: [
        {
            author: "Valentines",
            content: "Some very-very interests content",
            title: "Loves",
            __v: 0,
            _id: "60a6a1bbf2046f"
        }
    ] as Array<PostsType>
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

export default postsReducer

type InitialValueType = typeof initialValue
type ActionType = ActionTypes<typeof postsActions>

type PostsType = {
    __v: number
    _id: string
    title: string
    content: string
    author: string
}