import { useState, createContext } from "react";
import Post from "./Post";
import Search from "../ShellterList/Search";

export const AppContext = createContext();

export default function PostBind(){
    const [adrs,setAdrs] = useState(null)

    return(
        <>
        <AppContext.Provider value={{setAdrs}}>
            <Post/>
            
        </AppContext.Provider>
        <div>
            {adrs!==null&&<Search address = {adrs}/>}
        </div>
        </>
    )
    
}