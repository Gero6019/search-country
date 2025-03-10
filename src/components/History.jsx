import { useEffect, useState } from "react"

export const History = ({ countries })=>{
    const [history, setHistory] = useState([])
    
    useEffect(()=>{
        if(history.length <= 5){
            setHistory([...history,countries])
        }else{
            setHistory([...history,countries])
            setHistory(history.slice(1,5))
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