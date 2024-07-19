import { useState } from 'react'

function Condicional(){
    function enviarEmail(e){
        e.preventDefault()
        console.log("Email enviado")
    }
    

    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email" />
                <button type="submit" onClick={enviarEmail}>
                Enviar-email</button>
            </form>
        </div>
    )

}

export default Condicional