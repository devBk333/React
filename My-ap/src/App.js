import './App.css';
import Lista from './componentes/Lista';

function App() {

  const meusItens = ['React','Vue','Angular']     //array
  
  //div  container conteudo   //Classname no react
  return (
    <div className="App">      
      <h1>Renderização listas</h1>
      <Lista itens={meusItens}/>
      <Lista itens={[]}/>               
      </div>
  ); 
}                                                 //array vazio   index puxa if  

export default App;
