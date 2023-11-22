// import { useEffect, useState } from 'react';
// import style from './Kakaomap.module.css';
// import Home from '../../pages/Home';
// const { kakao } = window;

// function Kakaomap() {
//   const [currentLocation, setCurrentLocation] = useState(null);

//   useEffect(() => {
//     // 사용자의 현재 위치를 가져오는 함수
//     navigator.geolocation.getCurrentPosition((position) => {
//       // 현재 위치의 위도와 경도
//       const { latitude, longitude } = position.coords;
//       const initialPosition = new kakao.maps.LatLng(latitude, longitude);
//       setCurrentLocation(initialPosition);

//       // 지도를 표시할 DOM 요소
//       const container = document.getElementById('map');
//       // 지도 옵션 설정
//       const options = {
//         center: initialPosition,
//         level: 3
//       };
//       // 지도 생성
//       const map = new kakao.maps.Map(container, options);

//       // 지도에 mousemove 이벤트 리스너 추가
//       kakao.maps.event.addListener(map, 'mousemove', function(mouseEvent) {
//         const position = mouseEvent.latLng;
//         setCurrentLocation(position);
//       });
//     }, (error) => {
//       console.error(error);
//     });
//   }, []);

//   // 현재 위치를 출력하는 부분 (예시)
//   useEffect(() => {
//     if(currentLocation) {
//       console.log('현재 마우스 위치:', currentLocation.toString());
//     }
//   }, [currentLocation]);

//   return (
//     <div className={style.mapcont}>
//       <div id="map" className={style.map}></div>
//     </div>
//   );
// }

// export default Kakaomap;

