import { Route, withRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Pages/Main/Main'
import Post from './Pages/Post/Post'

const App = () => {
  return (
    <div>
      <Header/>
      <Route path='/' exact component={Main}/>
      <Route path='/post' component={Post}/>
      <Footer/>
    </div>
  )
}

export default withRouter(App)