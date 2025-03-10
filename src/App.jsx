import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { ShowContries } from './components/ShowContries'
import { History } from './components/History'

function App() {
  const [countries,setCountries] = useState([])
  const [error,setError] = useState(false)

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setCountries={setCountries} setError={setError}/>
      <ShowContries countries={countries} error={error}/>
      <History countries={countries.length == 1 ? countries[0] : undefined } />
    </>
  )
}

export default App
