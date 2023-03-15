import styled from "styled-components";
import mainImg from "../images/main_image.png";

function MainPage() {
  return (
    <ImgWrapper>
      <img src={mainImg} alt="메인 이미지" />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default MainPage;
