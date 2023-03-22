import MapContainer from "../components/pages/counslingcenter/MapContainer";
import SidoSelect from "../components/pages/counslingcenter/SidoSelect";
import CenterSelect from "../components/pages/counslingcenter/CenterSelect";
// import { useState } from "react";
import centerAddresses from "../datas/counseling_center.json";
import { sido } from "../utils/consts";
import styled from "styled-components";

function CounselingCenterPage() {
  const sidoName = centerAddresses.map((data) => data.시도명);

  const centerName = centerAddresses.map((data) => data.상담소명);

  // const [sidos, setSidos] = useState();
  // const handleSidoChange = (e) => {
  //   setSidos(e.target.value);
  //   console.log(sidos);
  // };

  return (
    <div>
      <h1>상담소 찾기</h1>
      <ContentContainer>
        <MapContainer />
        <SidoSelect sido={sido} defaultValue="seoul"></SidoSelect>
        <CenterSelect centerName={centerName}></CenterSelect>
      </ContentContainer>
    </div>
  );
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default CounselingCenterPage;
