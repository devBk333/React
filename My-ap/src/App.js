import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Empresa from './Pages/Empresa' 
import Newproject from './Pages/NewProject'
import Container from './componentes/Layout/Container'

function App() {
return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Empresa">Empresa</Link>
        <Link to="/Newproject">Newproject</Link>
      </div>
      <Switch>
        <Container customClass='min-higth'>
          <Route exact path="/">  <Home />   </Route>
          <Route exact path="/Empresa"><Empresa /> </Route>
          <Route exact path="/Contato"><Contato /> </Route>
          <Route exact path="/Newproject"><Newproject /> </Route>
          </Container>
      </Switch>
    </Router>
  )
}                                               

export default App
