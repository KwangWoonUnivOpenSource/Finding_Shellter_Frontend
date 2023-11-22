import React, { useState, useEffect } from 'react';
import styles from './Unitedmap.module.css'
function Unitedmap() {
  const [isMapView, setIsMapView] = useState(true);
  const [inputPosition, setInputPosition] = useState('');
  const [map, setMap] = useState(null);
  const [roadview, setRoadview] = useState(null);
  const [roadviewClient, setRoadviewClient] = useState(null);
  const [marker, setMarker] = useState(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const { kakao } = window;
  const updateRoadview = (roadviewClient, roadview, position) => {
    roadviewClient.getNearestPanoId(position, 50, function(panoId) {
      roadview.setPanoId(panoId, position);
    });
  };

  useEffect(() => {
    // Kakao Maps API 로딩 상태 확인
    if (window.kakao && window.kakao.maps) {
      setApiLoaded(true);
    }

    const initializeMap = (placePosition) => {
      const mapOption = {
        center: placePosition,
        level: 3
      };

      const mapContainer = document.getElementById('map');
      const map = new kakao.maps.Map(mapContainer, mapOption);
      setMap(map);

      const rvContainer = document.getElementById('roadview');
      const roadview = new kakao.maps.Roadview(rvContainer);
      setRoadview(roadview);

      const roadviewClient = new kakao.maps.RoadviewClient();
      setRoadviewClient(roadviewClient);
      updateRoadview(roadviewClient, roadview, placePosition);

      let marker = new kakao.maps.Marker({
        position: placePosition,
        map: map
      });
      setMarker(marker);

      kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
        const clickedPosition = mouseEvent.latLng;
        marker.setPosition(clickedPosition);
        updateRoadview(roadviewClient, roadview, clickedPosition);
      });
    };

    // 현재 위치를 기반으로 지도 설정
    if (apiLoaded) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        initializeMap(new kakao.maps.LatLng(currentLat, currentLng));
      }, () => {
        initializeMap(new kakao.maps.LatLng(33.450701, 126.570667));
      });
    }
  }, [apiLoaded]);

  const toggleView = () => {
    setIsMapView(!isMapView);
  };

  const handlePositionChange = (event) => {
    setInputPosition(event.target.value);
  };

  const applyPosition = () => {
    if (apiLoaded) {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(inputPosition, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const newPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(newPosition);
          marker.setPosition(newPosition);
          updateRoadview(roadviewClient, roadview, newPosition);
    
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].address_name}</div>`
          });
          infowindow.open(map, marker);
        }
      });
    }
  };

  return (
    <div>
        <div className={styles.btncont}>
        <button className = {styles.btn} id="btnToggleView" onClick={toggleView}>
          {isMapView ? '로드뷰 보기' : '지도 보기'}
        </button>
        <input className = {styles.input} type="text" value={inputPosition} onChange={handlePositionChange} placeholder="위치 (주소)" />
        <button className = {styles.enter}onClick={applyPosition}>검색</button>
        </div>
      <div id="container">
        <div id="mapWrapper" className={`${isMapView ? styles.block : styles.none} ${styles.mapcont}`}>
          <div id="map" className={styles.map}></div>
        </div>
        <div id="rvWrapper" className={`${isMapView ? styles.none : styles.block} ${styles.mapcont}`}>
          <div id="roadview" className={styles.map}></div>
        </div>
      
      </div>
    </div>
  );
}

export default Unitedmap;
