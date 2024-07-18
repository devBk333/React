import './App.css';
import Evento    from './componentes/Evento'
import Form      from './componentes/Form'

function App() {
  
  //div  container conteudo   //Classname no react
  return (
    <div className="App">      
      <h1>Testando eventos</h1>
      <Evento numero = "1"/>
      <Evento numero = "2"/>
      <Form />
      </div>
  );
}

export default App;
