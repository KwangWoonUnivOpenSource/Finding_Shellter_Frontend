import { useState,useEffect } from "react";
import ShowShellters from "./ShowShellters";

async function searchAPI(address){
    
    const url = '/search'
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
        }
        const response = await fetch(url,options)
        const result = await response.json()
        const ParsedData = await result.shellter
        return ParsedData

}

const Search = (props) => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        setData(searchAPI())
    },[])
    return (
        <div>
            <h1>List</h1>
            <ShowShellters data={data}/>
        </div>
    )
    

}

export default Search