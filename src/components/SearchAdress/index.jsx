import style from "./SearchAddress.module.css"
function SearchAddress(){
return(
  <div className= {style.inputbox}>
    <p>도로명</p>
    <input  className = {style.input} placeholder='주소를 입력해주세요.'/>
    <p>법정동</p>
  </div>
  );
}
export default SearchAddress 