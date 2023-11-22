import { useState,useEffect } from 'react';
import Kakaomap from '../KakaoMap';
const { kakao } = window;

function Roadview({ currentLocation, setCurrentLocation }) {
 
  useEffect(() => {
    // 로드뷰를 표시할 DOM 요소
    var roadviewContainer = document.getElementById('roadview'); 
    var roadview = new kakao.maps.Roadview(roadviewContainer); 
    var roadviewClient = new kakao.maps.RoadviewClient(); 

    // 사용자의 현재 위치를 가져오는 함수
    navigator.geolocation.getCurrentPosition((position) => {
      // 현재 위치의 위도와 경도
      const { latitude, longitude } = position.coords;
      const initialPosition = new kakao.maps.LatLng(latitude, longitude);
      var currentPos = new kakao.maps.LatLng(latitude, longitude);
      setCurrentLocation(initialPosition);


      // 현재 위치에 가장 가까운 로드뷰의 파노라마 ID를 찾음
      roadviewClient.getNearestPanoId(currentPos, 50, function(panoId) {
        roadview.setPanoId(panoId, currentPos); // 로드뷰 실행
      });
    }, (error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <div id="roadview" style={{ width: '80%', height: '300px' }}></div>
    </>
  );
}

export default Roadview;
