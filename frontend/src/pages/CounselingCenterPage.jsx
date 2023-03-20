import MapContainer from "../components/pages/counslingcenter/MapContainer";
import AddressSelect from "../components/pages/counslingcenter/AddressSelect";

const sido = [
  { value: "seoul", name: "서울특별시" },
  { value: "busan", name: "부산광역시" },
  { value: "daegu", name: "대구광역시" },
  { value: "incheon", name: "인천광역시" },
  { value: "gwangju", name: "광주광역시" },
  { value: "ulsan", name: "올산광역시" },
  { value: "daejeon", name: "대전광역시" },
  { value: "gyeonggi", name: "경기도" },
  { value: "gangwon", name: "강원도" },
  { value: "chungcheongbuk", name: "충청북도" },
  { value: "chungcheongnam", name: "충청남도" },
  { value: "jeollabuk", name: "전라북도" },
  { value: "jeollanam", name: "전라남도" },
  { value: "gyeongsangbuk", name: "경상북도" },
  { value: "gyeongsangnam", name: "경상남도" },
  { value: "jeju", name: "제주특별자치도" },
];

function CounselingCenterPage() {
  return (
    <div>
      <h1>상담소 찾기</h1>
      <MapContainer />
      <AddressSelect sido={sido} defaultValue="seoul"></AddressSelect>
    </div>
  );
}

export default CounselingCenterPage;
