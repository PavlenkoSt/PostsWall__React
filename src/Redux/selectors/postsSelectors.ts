import { AppStateType } from '../reduxStore'

export const postsSelector = (state: AppStateType) => state.posts.posts
export const targetPostSelector = (state: AppStateType) => state.posts.targetPost