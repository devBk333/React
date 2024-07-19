//formularios
import { useState } from 'react'                     //import State

function Form(){

    function cadastrarUsuario(e) {
        e.preventDefault()                           //para html e faz isso primeiro  precisa quando tiver evento
        console.log(name)                            //console
        console.log('Cadastrou usuário!') }

// Declara uma variável de estado chamada 'name' e uma função para atualizá-la chamada 'setName'

    const [name, setName] =         useState()      //implementaçao hook  State  
    const [password, setPassword] = useState()       //cria constante   
    
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit = {cadastrarUsuario}>
                <div>
                <label htmlFor="name">Nome:</label> 
                <input 
                 type="text" 
                 id="name"
                 name="name"
                 placeholder="Digite seu nome"                        //set as const baseado em campo de input
                 onChange={(e) => setName(e.target.value)}/>  
                </div>
        
                <div>
                <label htmlFor="password">Senha:</label>
                <input 
                 type="password"
                 id="password"
                 name="password"
                 placeholder="Digite sua senha"                       //nome dentro do input
                 onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>            
                </div>
            </form>
        </div>
    )
}

export default Form