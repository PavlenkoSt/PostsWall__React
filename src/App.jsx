import { useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Pages/Main'

const App = () => {
  const getPosts = async () => {
    const posts = await fetch('http://localhost:8888/api/posts')
    const postsEls = await posts.json()
    console.log(postsEls)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Header/>
      <Route path='/' exact component={Main}/>
      <Footer/>
    </div>
  )
}

export default withRouter(App)