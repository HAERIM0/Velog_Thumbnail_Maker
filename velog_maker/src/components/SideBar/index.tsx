import { useTitle } from "../../hooks/useTitle";
import TitleInput from "../TitleInput";
import * as S from "./style";

const SideBar = () => {
  const { TitleData, handleTitleChange } = useTitle();
  return (
    <S.SideBarContainer>
      <S.SideBarBox>
        <div>
          <S.Title>배경</S.Title>
        </div>
        <div>
          <S.Title>제목</S.Title>
          <TitleInput
            id="Title"
            name="Title"
            placeholder="제목을 입력하세요"
            onchange={handleTitleChange}
          />
        </div>
        <div>
          <S.Title>부제목</S.Title>
          <TitleInput
            id="Subtitle"
            name="Subtitle"
            placeholder="부제목을 입력하세요"
            onchange={handleTitleChange}
          />
        </div>
        <div>
          <S.Title>분류</S.Title>
          <TitleInput
            id="Category"
            name="Category"
            placeholder="분류를 입력하세요"
            onchange={handleTitleChange}
          />
        </div>
        <div>
          <S.Title>구성요소</S.Title>
        </div>
        <div>
          <S.Title>텍스트 스타일</S.Title>
        </div>
      </S.SideBarBox>
    </S.SideBarContainer>
  );
};

export default SideBar;
