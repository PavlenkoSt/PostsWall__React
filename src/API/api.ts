import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://http://localhost:8888/api/',
    withCredentials: true,
})

const DAL = {
    posts: {
        getPosts(){
            return instance.get('posts')
        }
    }
}

export default DAL