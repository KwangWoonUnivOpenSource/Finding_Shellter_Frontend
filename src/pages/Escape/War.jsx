import style from "./War.module.css"
import Carousel from 'react-bootstrap/Carousel';
import { IoWarningSharp } from "react-icons/io5";
function War(){
  return(
  <div>
    <div className = {style.wrap}>
      <div className = {style.top}>
        <h3 className = {style.toph3}><IoWarningSharp/>비상 시 지켜야할 기본 행동요령</h3>
        <p  className ={style.p}>집밖으로 나오지 말고 방송을 계속 들으면서 정부의 안내를 믿고 따라야 합니다. 무작정 피난에 나서거나 식량·연료 등 생활필수품의 사재기를 해서는 안되며, 정부가 배급제를 실시할 경우 적극협조해야 합니다.</p>
       <p>적의 거짓선전에 속아 동요하는 일이 없도록 하고, 적에게 도움을 주는 행위를 해서는 안됩니다.</p> 
       <p>군사작전 등을 돕기 위한 필요차량을 제외한 모든 차량에 대하여 운행이 제한되므로 대중교통수단을 이용해야 하며, 개인용 유·무선 전화기는 꼭 필요한 때 외에는 사용을 자제해야 합니다.</p> 
       <p>평소, 가정과 직장주변의 대피소나 비상급수원을 확인해 두고, 적의 공습 등이 예상될 때는 지하대피소로 신속히 대피해야 합니다.</p>
      </div>
      <div className= {style.carowrap}>
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
      <Carousel.Item>
        <img/>
        <h1 className ={style.h1}><IoWarningSharp/>3. 공습경보가 울리면 즉시 대피해야 합니다</h1>
        <h3  className ={style.h3}>지하대피소등 안전한 곳으로 빨리 대피하고 고층건물에서는 지하실 또는 아래층으로 대피해야 합니다.
            화생방 공격에 대비한 방독면 등 개인보호장비와 간단한 생필품·물자 등을 가지고 대피해야 합니다.
            운행중인 차량은 가까운 빈터나 도로 오른쪽에 세우고 승객을 모두 내리게 하여 안전한 곳으로 대피 토록해야 합니다.
            대피한 뒤에도 계속 방송을 들으면서 정부의 안내에 따라 행동해야 합니다.</h3>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  </div>
  );
}

export default War