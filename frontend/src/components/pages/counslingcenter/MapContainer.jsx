import { useEffect } from "react";
import centerAddresses from "../../../datas/counseling_center.json";

const { kakao } = window;

function MapContainer() {
  useEffect(() => {
    const mapContainer = document.getElementById("myMap");
    const mapOption = {
      center: new kakao.maps.LatLng(36.2683, 127.6358),
      level: 14,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);
    const geocoder = new kakao.maps.services.Geocoder();

    centerAddresses.forEach((data) => {
      const { 상담소명, 주소 } = data;
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(주소, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 상담소명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:160px;text-align:center;padding:6px 0;border-bottom: 2px solid #ccc">' +
              `${상담소명}` +
              "</div>" +
              '<div style="width:160px;text-align:center;padding:6px 0;">' +
              `${주소}` +
              "</div>",
          });

          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
          });
        }
      });
    });
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "700px",
        height: "600px",
      }}
    ></div>
  );
}

export default MapContainer;
