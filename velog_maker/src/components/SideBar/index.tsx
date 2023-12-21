import { useTitle } from "../../hooks/useTitle";
import TitleInput from "../TitleInput";
import * as S from "./style";
import SelectButton from "../Button/SelectButton";
import { useImgUpload } from "../../hooks/useImgUpload";

const SideBar = () => {
  const { handleTitleChange } = useTitle();
  const { onClickImg, ImgRef, onUploadImg } = useImgUpload();
  return (
    <S.SideBarContainer>
      <S.SideBarBox>
        <S.SideBarList>
          <S.Title>배경</S.Title>
          <input
            type="file"
            style={{ display: "none" }}
            ref={ImgRef}
            onChange={(e) => onUploadImg(e)}
          />

          <SelectButton width={330} padding={true} onclick={onClickImg}>
            이미지 업로드
          </SelectButton>
          <SelectButton width={330} padding={true}>
            랜덤 그라디언트
          </SelectButton>
          <S.SelectBox>
            <SelectButton width={160} padding={true}>
              랜덤 그라디언트
            </SelectButton>
            <SelectButton width={160} padding={false}>
              랜덤 그라디언트
            </SelectButton>
          </S.SelectBox>

          <S.Title>제목</S.Title>
          <TitleInput
            id="Title"
            name="Title"
            placeholder="제목을 입력하세요"
            onchange={handleTitleChange}
          />

          <S.Title>부제목</S.Title>
          <TitleInput
            id="Subtitle"
            name="Subtitle"
            placeholder="부제목을 입력하세요"
            onchange={handleTitleChange}
          />

          <S.Title>분류</S.Title>
          <TitleInput
            id="Category"
            name="Category"
            placeholder="분류를 입력하세요"
            onchange={handleTitleChange}
          />
          <S.Title>구성요소</S.Title>
          <SelectButton width={330} padding={true}>
            제목/부제목/분류
          </SelectButton>
          <SelectButton width={330} padding={true}>
            제목/부제목
          </SelectButton>
          <S.SelectBox>
            <SelectButton width={160} padding={true}>
              제목/분류
            </SelectButton>
            <SelectButton width={160} padding={false}>
              제목
            </SelectButton>
          </S.SelectBox>
          <S.Title>텍스트 스타일</S.Title>
          <SelectButton width={330} padding={true}>
            텍스트 색상 반전
          </SelectButton>

          <S.SelectBox>
            <SelectButton width={160} padding={true}>
              색상
            </SelectButton>
            <SelectButton width={160} padding={false}>
              그림자
            </SelectButton>
          </S.SelectBox>
          <S.SelectBox>
            <SelectButton
              width={160}
              padding={true}
              backgroundcolor="#626262"
              color="white"
            >
              초기화
            </SelectButton>
            <SelectButton
              width={160}
              padding={false}
              backgroundcolor="#626262"
              color="white"
            >
              다운로드
            </SelectButton>
          </S.SelectBox>
        </S.SideBarList>
      </S.SideBarBox>
    </S.SideBarContainer>
  );
};

export default SideBar;
