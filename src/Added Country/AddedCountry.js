import React from 'react';

const AddedCountry = (props) => {
    // console.log(props)
    const one = props.newCountry

    let totalPopulation = 0;
    let countryName = [];
    for (let i = 0; i < one.length; i++) {
        let element = one[i];
        countryName = countryName + element.name
        totalPopulation = totalPopulation + element.population

    }
    return (
        <div>
            <h2>this is added country</h2>
            <h3>Country Added : {one.length}</h3>
             CountryName : <li> {countryName}</li>
            <h4>Population :{totalPopulation} </h4>
        </div>
    );
};

export default AddedCountry;