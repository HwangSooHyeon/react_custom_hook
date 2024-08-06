import UseFetch from "./UseFetch.jsx";
import React from "react";

const FetchYogaData = () => {
    const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
    console.log(data);
    return (
        <>
            <ul className='list_data_main'>
                {data && data.map((element, index) => (
                    <li key={index} className="list_data">
                        <h3>{element.name}</h3>
                        <p><strong>Name: </strong>{element.name}</p>
                        <p><strong>Benefits: </strong>{element.benefits}</p>
                        <p><strong>Time Duration: </strong>{element.time_duration}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FetchYogaData;