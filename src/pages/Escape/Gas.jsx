import style from "./Gas.module.css";
import { IoWarningSharp } from "react-icons/io5";

function Gas() {
  return(
    <div>
       <div className = {style.top}>
        <h3 className = {style.toph3}><IoWarningSharp/>화생방전이란?</h3>
        <p className ={style.p}>화학전, 생물학전, 방사능(핵)전의 첫 글자를 딴 말로서</p>
        <p className ={style.p}>화학전은 독성이 강한 화학가스를 살포하고</p>
        <p className ={style.p}>생물학전은 세균, 해충 등 전염성 물질을 퍼뜨리며</p>
        <p className ={style.p}>방사능전은 원자탄 등 핵무기를 이용하는 전쟁형태를 말합니다.</p>
       
      </div>
    </div>
  );
}

export default Gas