import { useState, createContext } from "react";
import Post from "./Post";
import Search from "../ShellterList/Search";
export const AppContext = createContext();

export default function PostBind(){
    const [isSub, setSub] = useState(false)
    const [adrs,setAdrs] = useState(null)

    return(
        <AppContext.Provider value={{setSub,setAdrs}}>
            <Post/>
            {isSub&&<Search address = {adrs}/>}
        </AppContext.Provider>
    )
    
}