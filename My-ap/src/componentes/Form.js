//formularios

function Form(){

    function cadastrarUsuario(e) {
        e.preventDefault() //para html e faz isso primeiro  precisa quando tiver evento
        console.log('Cadastrou usuário!')
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit = {cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form