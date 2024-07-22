function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`;
    }

 //<> fragment
    return (<>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>)

}
//state lift
export default Saudacao