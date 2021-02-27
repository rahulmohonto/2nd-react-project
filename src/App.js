import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Country/Country';
import AddedCountry from './Added Country/AddedCountry';


function App() {
  // const [country, setCountry] = useState([])

  // useEffect(() => {
  //   fetch('https://restcountries.eu/rest/v2/all')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCountry(data)
  //       const Names = data.map(countryElement => countryElement.name)
  //       console.log(Names);
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  const [country1, setCountry1] = useState([])

  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        const names = data.map(countryElement => countryElement.name)
      })
  }, [])

  const handleAddCountry = (country) => {
    const addedCountry = [...country1, country]
    setCountry1(addedCountry);

  }




  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Country number: {country.length}</h2>
        <ul>
          {
            country.map(countries => <li>{countries.name}</li>)
          }
        </ul> */}
        <div>
          <h3>Country Added : {country1.length}</h3>
          <AddedCountry newCountry={country1}></AddedCountry>
          {

            countries.map(country =>
              <Country countryEle={country} handleAddCountry={handleAddCountry}>
              </Country>
            )

          }
        </div>
      </header>
    </div>
  );
}

export default App;
