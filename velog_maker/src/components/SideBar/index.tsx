import { useTitle } from "../../hooks/useTitle";
import TitleInput from "../TitleInput";
import * as S from "./style";
import SelectButton from "../Button/SelectButton";
import { useImgUpload } from "../../hooks/useImgUpload";
import { HexColorPicker } from "react-colorful";
import { Dispatch, SetStateAction } from "react";
import { useBackGroundColor } from "../../hooks/useColor";

interface SideBarProps {
  titleColorPalette: string;
  selectComponent: string;
  randomColor: string;
  onRandomColor: Dispatch<SetStateAction<string>>;
  onTitleColorPalette: Dispatch<SetStateAction<string>>;
  onSelectComponent: Dispatch<SetStateAction<SelectComponentType>>;
  onChangeColor: () => void;
  onChangeGradient: () => void;
  onChangeTitleColor: () => void;
  onChangeTitleShadow: () => void;
  onDownloadThumbnail: () => void;
}

const SideBar = ({
  randomColor,
  titleColorPalette,
  onChangeColor,
  onChangeGradient,
  onChangeTitleColor,
  onChangeTitleShadow,
  onDownloadThumbnail,
  onRandomColor,
  onTitleColorPalette,
  onSelectComponent,
}: SideBarProps) => {
  const { handleTitleChange, titlePalette, toggleTitlePalette } = useTitle();
  const { onClickImg, imgRef, onUploadImg } = useImgUpload();
  const { colorPalette, toggleColorPalette } = useBackGroundColor();

  return (
    <S.SideBarContainer>
      <S.SideBarWrapper>
        <S.SideBarItem>
          <S.Title>배경</S.Title>
          <input
            type="file"
            style={{ display: "none" }}
            ref={imgRef}
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
            <SelectButton width={160} padding={0} onClick={toggleColorPalette}>
              단색
            </SelectButton>
          </S.SelectBox>
          {colorPalette ? (
            <S.PopupContainer>
              <HexColorPicker color={randomColor} onChange={onRandomColor} />
            </S.PopupContainer>
          ) : null}

          <S.Title>제목</S.Title>
          <TitleInput
            id="title"
            name="title"
            placeholder="제목을 입력하세요"
            onchange={handleTitleChange}
          />
          <S.Title>부제목</S.Title>
          <TitleInput
            id="subtitle"
            name="subtitle"
            placeholder="부제목을 입력하세요"
            onchange={handleTitleChange}
          />
          <S.Title>분류</S.Title>
          <TitleInput
            id="category"
            name="category"
            placeholder="분류를 입력하세요"
            onchange={handleTitleChange}
          />
          <S.Title>구성요소</S.Title>
          <SelectButton
            width={330}
            padding={25}
            onClick={() => onSelectComponent("all")}
          >
            제목/부제목/분류
          </SelectButton>
          <S.SelectBox>
            <SelectButton
              width={160}
              padding={25}
              onClick={() => onSelectComponent("titleCategory")}
            >
              제목/분류
            </SelectButton>

            <SelectButton
              width={160}
              padding={0}
              onClick={() => onSelectComponent("title")}
            >
              제목만
            </SelectButton>
          </S.SelectBox>
          <S.Title>텍스트 스타일</S.Title>
          <SelectButton width={330} padding={25} onClick={onChangeTitleColor}>
            텍스트 색상 반전
          </SelectButton>
          <S.SelectBox>
            <SelectButton width={160} padding={25} onClick={toggleTitlePalette}>
              색상
            </SelectButton>
            <SelectButton width={160} padding={0} onClick={onChangeTitleShadow}>
              그림자
            </SelectButton>
          </S.SelectBox>
          {titlePalette ? (
            <S.PopupContainer>
              <HexColorPicker
                color={titleColorPalette}
                onChange={onTitleColorPalette}
              />
            </S.PopupContainer>
          ) : null}
          <S.SelectBox>
            <SelectButton
              width={160}
              padding={25}
              backgroundColor="#626262"
              color="white"
              onClick={() => window.location.reload()}
            >
              초기화
            </SelectButton>
            <SelectButton
              width={160}
              padding={0}
              backgroundColor="#626262"
              color="white"
              onClick={onDownloadThumbnail}
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
