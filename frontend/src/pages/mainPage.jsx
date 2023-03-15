import styled from "styled-components";
import mainImg from "../images/main_image.png";
import Modal from "../components/pages/mainPage/Modal";

function MainPage() {
  return (
    <>
      <ImgWrapper>
        <img src={mainImg} alt="메인 이미지" />
      </ImgWrapper>
      <div>
        <Modal message="가정폭력 체크리스트" />
      </div>
    </>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default MainPage;
