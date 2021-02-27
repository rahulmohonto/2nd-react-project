import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, flag } = props.countryEle
    const handleAddToCountry = props.handleAddCountry;
    return (
        <div className="country" >
            <div >
                <h3> Country Name : {name}</h3>
                <h4> Population : {population}</h4>
                <h4>Region : {region}</h4>
                <button onClick={() => handleAddToCountry(props.countryEle)} id="but" className=" btn">Add Country</button>
                <h3 id="tbut">Add</h3>
            </div>

            <div className="shifter">
                <div className="image-container">
                    <ul>
                        <li><h3>Flag</h3></li>
                        <li>
                            <img src={flag}></img>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Country;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     