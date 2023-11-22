import style from "./Gas.module.css";
import { IoWarningSharp } from "react-icons/io5";
import Carousel from 'react-bootstrap/Carousel';

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
      <Carousel  className ={style.carousel}data-bs-theme="dark">
      <Carousel.Item>
        <img/>
        <h1 className ={style.h1}><IoWarningSharp/>1. 경보가 울리면 어떻게 해야 하는가?</h1>
        <h3 className ={style.h3}>경보가 울리면 즉시 방송을 들으며 정부의 안내에 따라야 합니다. 밤에는 불을 꺼야하며 부득이한 경우에는 불빛이 밖으로 새어 나가지 않도록 차단해야 합니다.</h3>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className ={style.h1}><IoWarningSharp/>2. 경계경보가 울리면 대피할 준비를 해야 합니다</h1>
        <h3  className ={style.h3}>어린이와 노약자를 미리 대피시키고 평소 준비해 둔 비상용품은 대피소로 옮겨야 합니다.
            화재위험이 있는 유류와 가스통 등은 안전한 곳으로 옮기고, 외부 가스밸브를 차단하며 전열기의 코드를 뽑아야 합니다.
            화생방 공격에 대비하여 방독면 등 개인보호장비를 점검하고, 음식물과 우물 등은 뚜껑이나 비닐로 덮어야 합니다.
            극장·운동장·백화점 등 사람이 많이 모이는 곳에서는 영업을 중단하고 손님들에게 대피준비를 하도록 해야 합니다.</h3>
        <img/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gas