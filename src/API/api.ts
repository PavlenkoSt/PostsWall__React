import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8888/api/',
})

const DAL = {
    posts: {
        getPosts(){
            return instance.get('posts').then(posts => posts.data)
        },
        getPost(id: string){
            return instance.get(`posts/${id}`).then(post => post.data)
        }
    }
}

export default DAL