import PropTypes from 'prop-types' 

function Item({marca, ano_lancamento}){
    return(
        <> 
        <li>{marca} - {ano_lancamento}</li>
        </>

    )
}
//tipos propriedades Validações
Item.propTypes = {
    marca : PropTypes.string.isRequired,
    ano_lancamento : PropTypes.number
}

Item.defaulProps = {
    marca : "Faltou a marca",
    ano_lancamento : 0
}

export default Item