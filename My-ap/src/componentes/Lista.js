function Lista({ itens }) {

    return(
        <>
        <h3>Lista de coisas boas:</h3>   
        {itens.length > 0 ? (
            itens.map((item, index) => 
                (<p key={index}>{item}</p>))) : (     // ?  if
                    <p>Não há itens na lista</p>     //função map   : else
        )}
        </>
    )
}

export default Lista