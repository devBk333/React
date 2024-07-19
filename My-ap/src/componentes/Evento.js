import Button from './eventos/Button'

function Evento ({ numero }){

    function meuEvento(){
        console.log('Ativando primeiro evento!')
    }

    function segundoEvento()
        {
        console.log('Ativando segundo evento')
        }
    
    //button  oclick manipula evento
    return (
        <div>
            <p>Clique para disparar evento:</p>
            <Button event={meuEvento} text="primeiro evento"/>     
            <Button event={segundoEvento} text="segundooooo"/>               
        </div>
    )
}

export default Evento