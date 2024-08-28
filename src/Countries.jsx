import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [country, setCountry ]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <p>Country : {country.length}</p>
            {
                country.map(country =><Country data={country}></Country>)
            }
        </div>
    );
};

export default Countries;