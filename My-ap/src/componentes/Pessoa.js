
/*function Pessoa(){
    return <div>
        <img src={props.foto} alt={props.nome}/>
        <h2>nome:{props.nome}</h2>
        <p>idade:{props.idade}</p>
        <p>profissao:{props.profissao}</p>
    </div>
}

export default Pessoa   ou*/

function Pessoa({ nome, idade, profissao }){
    return <div>
        <h2>nome:{nome}</h2>
        <p> idade:{idade}</p>
        <p> profissao:{profissao}</p>
    </div>
}

export default Pessoa



