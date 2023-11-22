import React ,{useContext, useState} from 'react';
import DaumPostcode from "react-daum-postcode";
import { AppContext } from './PostBind';
import { memo } from 'react';
import style from './PopupPostCode.module.css';

const PopupPostCode = (props) => {
    const  {setAdrs} = useContext(AppContext) 

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
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "relative",
        top: "20%",
        width: "80vw",
        height: "40vh",
        padding: "7px",
        
      };
    
 
    return(
      <>
        <div className='pc'>
            <DaumPostcode className={postCodeStyle} onComplete={handlePostCode} />
            <div className={style.btncont}>
            <button type='button' className = {`${style.btn}`} onClick={() => { props.onClose()}} >닫기</button>
            </div>
        </div>
      </>
    )
}
// className='postCode_btn'
export default memo(PopupPostCode);