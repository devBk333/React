import { useState } from 'react'   //hook     //elemento pai

import './App.css';
import SeuNome from './componentes/SeuNome';



function App() {

const [nome, setNome] = useState()   //State
  
  //div  container conteudo                       //Classname no react
  return (
    <div className="App">      
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome}
      </div>
  )
}                                                 //array vazio   index puxa if  

export default App;
