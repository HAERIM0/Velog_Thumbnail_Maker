import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarBox>
        <div>
          <S.Title>배경</S.Title>
        </div>
        <div>
          <S.Title>제목</S.Title>
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
