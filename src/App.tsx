import { Route, withRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Pages/Main/Main'

const App = () => {
  return (
    <div>
      <Header/>
      <Route path='/' exact component={Main}/>
      <Footer/>
    </div>
  )
}

export default withRouter(App)