import Item from './Item'

function List(){
    return (
     <>
         <h1>Minha Lista</h1>
        <ul>
          <Item marca = "Ferrari" ano_lancamento={2000}/>
          <Item marca = "Fiat" ano_lancamento={2023}/>
          <Item marca = "BMW"  ano_lancamento={2010}/>
        </ul>
     </>
    )
}

export default List