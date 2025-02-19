export const ShowContries = ({ countries }) => {
    console.log(countries)
    return <>
        <h2>Resultados</h2>
        {countries.map((element, index) => {

            return <div key={index}>
                <h3>{element.name.common}</h3>
                <h4>{element.capital ? element.capital[0] : "No tiene capital" }</h4>
                <h4>{element.population}</h4>
                <img src={element.flags.svg} height={50} alt="" />
            </div>

        })}
    </>
}