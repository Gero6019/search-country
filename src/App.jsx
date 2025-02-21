import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { ShowContries } from './components/ShowContries'
import { History } from './components/History'

function App() {
  // Countries es la lista que almacena el resultado.
  // setCountries es la funcion para guardar el resultado.
  const [countries,setCountries] = useState([])
  const [error,setError] = useState(false)

  // [ OBJETIVO: Pasar los datos de search a countries ]
  // Accion: Pasarle setCountries como prop a search.


  return (
    <>
      <h1>Buscador de paises</h1>

      {/* Componente search obtiene los resultados. */}
      <Search setCountries={setCountries} setError={setError}/>

      {/* element es un prop; le pasamos la lista de los resultados */}
      <ShowContries countries={countries} error={error}/>

      <History countries={countries.length == 1 ? countries[0] : undefined } />
    </>
  )
}

export default App
