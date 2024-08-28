import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countrys.css'
import './country.css'
const Countries = () => {
    const [country, setCountry] = useState([])
    //visited countries state
    const [visitedCountry, setVisitedCountry] = useState([])

    //visited country handle
    const handleMarkVisitedCountry = (country) => {
        const newCountry = [...visitedCountry, country];
        setVisitedCountry(newCountry)

    }


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <p>Country : {country.length}</p>
            <div>
                <p>Visited countries : {visitedCountry.length}</p>
                <ul>
                    {
                        visitedCountry.map(countr => <li>{countr}</li>)
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    country.map(country => <Country
                        data={country}
                        handleMarkVisitedCountry={handleMarkVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;