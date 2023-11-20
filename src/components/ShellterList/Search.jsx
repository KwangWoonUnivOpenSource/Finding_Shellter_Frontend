import { useState,useEffect } from "react";
import ShowShellters from "./ShowShellters";
import { async } from "q";

async function searchAPI(address){
    
    const url = 'http://localhost:8080/search'
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

async function Search  (props)  {
    const [data, setData] = useState(null)

    await setData(searchAPI())
    return (
        <div>
            <h1>List</h1>
            <ShowShellters data={data}/>
        </div>
    )
    

}

export default Search