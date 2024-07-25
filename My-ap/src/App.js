import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import Home    from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar  from './componentes/Layout/Navbar';
import Footer  from './componentes/Layout/Footer';


function App() {
return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/">  <Home />   </Route>
          <Route path="/empresa"><Empresa /> </Route>
          <Route path="/contato"><Contato /> </Route>
      </Switch>
      <Footer />
    </Router>
  )
}                                               

export default App
