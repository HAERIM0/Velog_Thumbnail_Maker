import { useTitle } from "../../hooks/useTitle";
import TitleInput from "../TitleInput";
import * as S from "./style";
import SelectButton from "../Button/SelectButton";
import { useImgUpload } from "../../hooks/useImgUpload";

interface SideBarProps {
  onChangeColor: () => void;
  onChangeGradient: () => void;
  handleChangeColor: () => void;
  handleChangeShadow: () => void;
}

const SideBar = ({
  onChangeColor,
  onChangeGradient,
  handleChangeColor,
  handleChangeShadow,
}: SideBarProps) => {
  const { handleTitleChange } = useTitle();
  const { onClickImg, ImgRef, onUploadImg } = useImgUpload();

  return (
    <S.SideBarContainer>
      <S.SideBarWrapper>
        <S.SideBarItem>
          <S.Title>배경</S.Title>
          <input
            type="file"
            style={{ display: "none" }}
            ref={ImgRef}
            onChange={(e) => onUploadImg(e)}
          />

          <SelectButton width={330} padding={25} onClick={onClickImg}>
            이미지 업로드
          </SelectButton>
          <SelectButton
            width={330}
            padding={25}
            onClick={() => onChangeGradient()}
          >
            랜덤 그라디언트
          </SelectButton>
          <S.SelectBox>
            <SelectButton
              width={160}
              padding={25}
              onClick={() => onChangeColor()}
            >
              랜덤 단색
            </SelectButton>
            <SelectButton width={160} padding={0}>
              단색
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
          <SelectButton width={330} padding={25}>
            제목/부제목/분류
          </SelectButton>
          <SelectButton width={330} padding={25}>
            제목/부제목
          </SelectButton>
          <S.SelectBox>
            <SelectButton width={160} padding={25}>
              제목/분류
            </SelectButton>
            <SelectButton width={160} padding={0}>
              제목
            </SelectButton>
          </S.SelectBox>
          <S.Title>텍스트 스타일</S.Title>
          <SelectButton width={330} padding={25} onClick={handleChangeColor}>
            텍스트 색상 반전
          </SelectButton>

          <S.SelectBox>
            <SelectButton width={160} padding={25}>
              색상
            </SelectButton>
            <SelectButton width={160} padding={0} onClick={handleChangeShadow}>
              그림자
            </SelectButton>
          </S.SelectBox>
          <S.SelectBox>
            <SelectButton
              width={160}
              padding={25}
              backgroundColor="#626262"
              color="white"
            >
              초기화
            </SelectButton>
            <SelectButton
              width={160}
              padding={0}
              backgroundColor="#626262"
              color="white"
            >
              다운로드
            </SelectButton>
          </S.SelectBox>
        </S.SideBarItem>
      </S.SideBarWrapper>
    </S.SideBarContainer>
  );
};

export default SideBar;
