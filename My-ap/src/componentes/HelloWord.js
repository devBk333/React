import Frase from "./Frase"


function HelloWord() {

    return (
        <div>
            <Frase/>
            <h1>Meu primeiro Componente</h1>
            <Frase/>  
            <Frase/>  
        </div>
    )
}

//reutilização componente
export default HelloWord    //Componente
