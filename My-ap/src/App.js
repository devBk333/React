import './App.css';
import HelloWord from './componentes/HelloWord';
import SayMyName from './componentes/SayMyName';

function App() {
  

  //div  container conteudo   //Classname no react
  return (
    <div className="App">      
      <HelloWord/>
      <SayMyName nome= "Helson"/>
      </div>
  );
}

export default App;
