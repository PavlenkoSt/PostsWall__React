import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Components/Header/Header'

const App = () => {
  const getPosts = async () => {
    const posts = await fetch('http://localhost:8888/api/posts')
    const postsEls = await posts.json()
    console.log(postsEls)
    console.log('work');
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default withRouter(App)