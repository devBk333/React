function Evento ({ numero }){

    function MeuEvento(){
        console.log('Opa fui ativado! $ {numero}')
    }

    return (
        <div>
            <p>Clique para disparar evento:</p>
            <button onCLick={MeuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento