import './App.css';
import HelloWord from './componentes/HelloWord'
import SayMyName from './componentes/SayMyName'
import Pessoa from './componentes/Pessoa'
import Frase from './componentes/Frase'
import List from './componentes/List'

function App() {
  
  //div  container conteudo   //Classname no react
  return (
    <div className="App">      
      <Frase/>
      <HelloWord/>
      <SayMyName nome= "Helson"/>
      <Pessoa 
      nome = "Helson" 
      idade = "23"
      profissao = "Dev"
      />
      <List/>
      </div>
  );
}

export default App;
