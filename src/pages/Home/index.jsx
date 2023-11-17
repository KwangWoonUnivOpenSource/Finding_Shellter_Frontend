import style from './Home.module.css';
function Home(){
    return (
        <div className={style.scroll}>
            <div className={style.textbox}>
            <h1 className={`${style.h1} ${style.wrap}`}>빠른 대피소 찾기 서비스</h1>
            <p className={style.wrap}>· 시도, 시군구별로 대피소 정보를 조회하실 수 있습니다.</p>
            <p className={style.wrap}>· 세종특별자치시는 시군구가 없으므로 읍면동에서 조회하시기 바랍니다.</p>
            <p className={style.wrap}>· 민방위사태 발생시 주민의 생명과 재산을 보호하기 위하여 정부지원으로 설치 또는 공공용으로 지정 지하 대피소</p>
            <p className={style.wrap}>주거지역의 대피소가 검색되지 않을 경우(법정동과 행정동의 차이) 인근 지역으로 재검색 시필요</p>
            <p className={style.wrap}>*** 타 시스템 연계를 통하여 제공되는 정보입니다. 조회가 지연될 수 있습니다.</p>
            </div>
        </div>
    );
}
export default Home