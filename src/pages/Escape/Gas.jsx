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
        <h1 className ={style.h1}><IoWarningSharp/>화생방 경보가 방송되면?</h1>
        <h3 className ={style.h3}>이웃에 경보를 전파한 후 방독면·보호옷 등을 착용하거나 수건 등으로 코와 입을 막고 비닐이나 우의로 몸을 보호해야 합니다.
<p>화학 공격이 있을 때는 고지대나 건물의 윗층으로 신속히 대피하되 실내대피시에는 문을 꼭 닫아 외부 오염공기를 차단해야 합니다.</p>

<p>생물학 공격이 있을 때는 위생에 힘쓰며 해충에 물리지 않도록 하고 끓인 물과 깨끗한 음식물만을 섭취해야 합니다.</p>

<p>핵 공격이 있을 때는 지하대피소로 신속히 대피하되 대피하지 못했을 경우는 핵 폭발 반대방향으로 엎드려 눈과 귀를 막아야하며, 핵 폭풍이 완전히 멈춘 후 일어나야 합니다.</p>

<p>가급적 실내에 머무르고 정부의 안내에 따라 오염지역을 신속히 벗어나야 합니다. 화생방 공격을 받은 지역은 공습이 끝난 후에도 그 일대가 넓게 독성 화학물질이나 세균 또는 방사능에 오염되어 있어 위험합니다. 따라서 해제지시가 있을 때까지는 보호장비의 착용 등 개인방호 조치를 계속 유지해야 합니다.</p></h3>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gas