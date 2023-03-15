import { useCallback, useState } from "react";
import styled from "styled-components";

const checkList = [
  "가족구성원이 물건을 던지면서 위협적인 분위기를 조성했다.",
  "가족구성원과의 싸움으로 뺨을 맞는 등 상처나 타박상을 입었다.",
  "가족구성원이 발로 차거나 주먹으로 때렸다.",
  "가족구성원이 흉기를 사용하여 때렸다.",
  "가족구성원이 지르는 고함소리에 위협을 느꼈다.",
  "가족구성원이 다른 사람들 앞에서 자신을 비난했다.",
  "가족구성원이 말을 하지 않고 밖으로 나가버렸다.",
  "가족구성원에게 욕이나 인격적으로 무시하는 말을 들었다.",
  "가족구성원이 경제권을 쥐고 생활비등을 주려하지 않았다.",
  "가족구성원이 원하지 않은 성행위를 강요했다.",
];

function CheckboxList() {
  //   CheckboxList 배열 중 체크 된 요소를 관리
  const [checkedList, setCheckedList] = useState([]);
  // 체크된 상태를 파악
  const [isChecked, setIsChecked] = useState(false);

  const checkedListHandler = (value, isChecked) => {
    // 체크되어있지 않다면 새롭게 추가
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    // 이미 체크되어있고 배열에 있다면 해당 배열에서 제거
    if (!isChecked && checkList.includes(value)) {
      setCheckedList(checkedList.filter((list) => list !== value));
      return;
    }
  };

  const checkHandler = (evt, value) => {
    setIsChecked(!isChecked);
    checkedListHandler(value, evt.target.checked);
  };

  const onSubmitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      console.log(`당신의 가정폭력 위험지수는 ${checkedList.length}점 입니다.`);
      setCheckedList([]);
    },
    [checkedList]
  );

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {checkList.map((list, i) => (
          <div key={i}>
            <input
              type="checkbox"
              id={list}
              checked={checkedList.includes(list)}
              onChange={(evt) => checkHandler(evt, list)}
            />
            <label htmlFor={list}>{list}</label>
          </div>
        ))}
        <SubmitButton>제출하기</SubmitButton>
      </form>
    </div>
  );
}

const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 20px;
  color: #ffffff;
  background-color: #3e4e34;
  border-radius: 10px;
  cursor: pointer;
`;

export default CheckboxList;
