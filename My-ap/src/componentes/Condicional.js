import { useState } from 'react'

function Condicional(){

    // Declara uma variável de estado chamada 'email' e uma função para atualizá-la chamada 'setEmail'

    const [email, setEmail] =        useState()    //state
    const [useEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("Email enviado")
    }
    
    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite seu email" 
                onChange={(e) => setEmail(e.target.value)}/>
                <button 
                type="submit" 
                onClick={enviarEmail}>Enviar-email</button>   


                {useEmail && (
                    <div>
                        <p>o e-mail do usuário é: {useEmail}</p>  
                    </div>
                )}


            </form>
        </div>
    )

}

export default Condicional

//renderizaçao condicional 