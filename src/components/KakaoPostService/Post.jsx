import React, { useState,createContext } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import style from './Post.module.css';
const Post = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

   
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
 
    return(
        <div>
            <div className={style.btncont}>
            <button type='button' className={style.btn} onClick={openPostCode}>빠르게 대피소 찾기</button>
            </div>
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
        </div>
    )
}
 
export default Post;