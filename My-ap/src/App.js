import './App.css';
import HelloWord from './componentes/HelloWord'
import SayMyName from './componentes/SayMyName'
import Pessoa from './componentes/Pessoa'

function App() {
  
  //div  container conteudo   //Classname no react
  return (
    <div className="App">      
      <HelloWord/>
      <SayMyName nome= "Helson"/>
      <Pessoa 
      nome = "SEILA"
      idade = "23"
      profissao = "Dev"
      />
      </div>
  );
}

export default App;
