import { useEffect, useState } from "react"

// usar el metodo slice de la lista history para seleccionar los ultimos elementos.
// Mostrar solo 5 paises en el historial.
// Optativo: Hacer que siempre se muestre el historial en pantalla.
// Se resuelve con Bootstrap clase position.

export const History = ({ countries })=>{
    const [history, setHistory] = useState([])
    
    useEffect(()=>{
        if(countries){
            setHistory([...history,countries]) // <-- Aqui se modifica
        }
    },[countries])

    return <>
        <h2>Historial</h2>
        {history.map((element,index)=>{
            return <div key={index}>
                <h4>{element.name.common}</h4>
            </div>
        })}
    </>
}