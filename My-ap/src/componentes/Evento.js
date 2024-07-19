import Button from './eventos/Button'

function Evento ({ numero }){

    function meuEvento(){
        console.log('Ativando primeiro evento!')
    }

    //button  oclick manipula evento
    return (
        <div>
            <p>Clique para disparar evento:</p>
            <Button event={meuEvento} text="primeiro evento"/>                    
        </div>
    )
}

export default Evento