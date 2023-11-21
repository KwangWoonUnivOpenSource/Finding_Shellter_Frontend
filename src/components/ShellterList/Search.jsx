import { useState,useEffect,useContext ,useRef} from "react";
import ShowShellters from "./ShowShellters";
import { async } from "q";
import { AppContext } from "../KakaoPostService/PostBind";
import axios from "axios";
import { useCallback } from "react";
import { memo } from "react";
import { ListGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";


 function Search(props) {
    const [shelters, setShelters] = useState([]);
    console.log(props.address)
    useEffect(()=>{
        
      
        const fd = new FormData();
        fd.append("address", props.address);    
        axios({
            method:"POST",
            url:"http://20.39.196.195:8080/search",
            data:fd,
        }
        ).then((res) =>  {
            console.log("res suceess")
            const shelterData = res.data.shelter
            setShelters(shelterData)
            
    
        })
        .catch((err)=>{
            console.log(err)
            
        })
    },[props.address])
        
    
    return (
            <div>
              {shelters.map (element => {
                return <ListGroup as="ol" numbered >
                <ListGroup.Item as="li">{element.shelterName} {element.shelterAddress} {element.distance} <Button href={element.directionUrl}>Link</Button></ListGroup.Item>
              </ListGroup>
              })}
            </div>
        )

}

export default memo( Search)