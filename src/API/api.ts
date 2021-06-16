import axios from 'axios'
import { PostsType } from '../Redux/postsReducer'

const instance = axios.create({
    baseURL: 'http://localhost:8888/api/',
})

const DAL = {
    posts: {
        getPosts(){
            return instance.get<Array<PostsType>>('posts').then(posts => posts.data)
        }
    }
}

export default DAL