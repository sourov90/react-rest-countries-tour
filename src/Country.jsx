import { useState } from "react";

const Country = ({ data, handleMarkVisitedCountry }) => {
 

    const { status, region, flags} = data;
    const [visited,setVisited] = useState(false)
     

    function handleClickVisited(){
        setVisited(!visited)
    }
    return (
        <div className={`visited && visited-country`} style={{ border: '3px solid green', marginTop:'30px' }}>
            <p>Name : {region}</p>
             <img src={flags.png} alt="" />
            <button onClick={()=>handleMarkVisitedCountry(data.region)}>Mark visited</button> <br />
             <button onClick={handleClickVisited}>Visited</button>
             {visited ?'i am visited this place':'i am go there'}
        </div>
    );
};

export default Country;