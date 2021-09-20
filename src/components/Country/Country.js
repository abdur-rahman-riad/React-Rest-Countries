import React from 'react';

const Country = (props) => {
    const { name, capital, region, population, flag } = props.country;
    const populationInitial = population;
    const populationInt = parseInt(populationInitial);
    const calculatePopulation = populationInt / 1000000;
    const totalPopulation = calculatePopulation.toFixed(2);
    return (
        <div className="single-country">
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {totalPopulation} Million</p>
            <img src={flag} alt={name} />
        </div>
    );
};

export default Country;