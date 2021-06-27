import React,{useState,useEffect} from 'react'

function Row({title,fetchUrl}) {
    const [movies, setmovies]= useState([]);

    useEffect(() =>{
        //

    })

    return (
        <div>
            {/*tittle*/}
            <h2>{title}</h2>

        
            {/* {container ->posters} */}
        </div>
    )
}

export default Row
