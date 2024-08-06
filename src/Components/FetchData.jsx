import React from 'react'
import UseFetch from "./UseFetch.jsx";
import './FetchData.css'

const FetchData = () => {
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
    return (
        <>
            <ul className='list_data_main'>
                {data && data.map((element, index) => (
                    <li key={index} className="list_data">
                        <h3>{element.name}</h3>
                        <p><strong>Importance: </strong>{element.importance}</p>
                        <p><strong>Benefits: </strong>{element.benefits6}</p>
                        <p><strong>Time to eat: </strong>{element.best_time_to_intake}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchData