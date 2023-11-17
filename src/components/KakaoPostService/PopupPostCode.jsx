import React ,{useContext, useState} from 'react';
import DaumPostcode from "react-daum-postcode";
import { AppContext } from './PostBind';



const PopupPostCode = (props) => {
    const {setSub, setAdrs} = useContext(AppContext) 

	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        setAdrs(fullAddress)
        setSub(true)
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px",
      };
 
    return(
      <>
        <div className='pc'>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' onClick={() => { props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
      </>
    )
}
 
export default PopupPostCode;