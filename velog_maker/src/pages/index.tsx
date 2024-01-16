import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";
import { useBackGroundColor } from "../hooks/useColor";

import TitlePreview from "../components/TitlePreview";

const Home: NextPage = () => {
  const {
    titleChange,
    titleShadow,
    toggleTitleChange,
    toggleTitleShadow,
    setTitleColorPalette,
    titleColorPalette,
    setSelectComponent,
    selectComponent,
    titleData,
  } = useTitle();
  const { imgSrc, onDownloadThumbnail, cardRef } = useImgUpload();
  const { changeColor } = useBackGroundColor();

  const selectedComponent = () => {
    switch (selectComponent) {
      case "all":
        return (
          <S.TitleBox Top={20}>
            <TitlePreview
              isTitleChange={titleChange}
              titleColorPalette={titleColorPalette}
              isTitleShadow={titleShadow}
              isFontStyle={true}
              isBottom={25}
            >
              {titleData.title}
            </TitlePreview>
            <TitlePreview
              isTitleChange={titleChange}
              titleColorPalette={titleColorPalette}
              isTitleShadow={titleShadow}
              isFontStyle={false}
              isBottom={90}
            >
              {titleData.subtitle}
            </TitlePreview>
            <TitlePreview
              isTitleChange={titleChange}
              titleColorPalette={titleColorPalette}
              isTitleShadow={titleShadow}
              isFontStyle={false}
              isBottom={-55}
            >
              {titleData.category}
            </TitlePreview>
          </S.TitleBox>
        );
      case "titleCategory":
        return (
          <S.TitleBox Top={-40}>
            <TitlePreview
              isTitleChange={titleChange}
              titleColorPalette={titleColorPalette}
              isTitleShadow={titleShadow}
              isFontStyle={true}
              isBottom={25}
            >
              {titleData.title}
            </TitlePreview>
            <TitlePreview
              isTitleChange={titleChange}
              titleColorPalette={titleColorPalette}
              isTitleShadow={titleShadow}
              isFontStyle={false}
              isBottom={-55}
            >
              {titleData.category}
            </TitlePreview>
          </S.TitleBox>
        );
      case "title":
        return (
          <TitlePreview
            isTitleChange={titleChange}
            titleColorPalette={titleColorPalette}
            isTitleShadow={titleShadow}
            isFontStyle={true}
            isBottom={25}
          >
            {titleData.title}
          </TitlePreview>
        );
    }
  };

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewContainer ref={cardRef}>
          <S.PreviewBox>
            {imgSrc ? (
              <S.Img src={imgSrc} />
            ) : (
              <S.Preview
                style={{ background: `${changeColor.getRandomColor()}` }}
              />
            )}
          </S.PreviewBox>
          <S.TitleContainer>{selectedComponent()}</S.TitleContainer>
        </S.PreviewContainer>
        <SideBar
          onChangeTitleColor={toggleTitleChange}
          onChangeColor={changeColor.onChangeColor}
          onChangeGradient={changeColor.onChangeGradient}
          onChangeTitleShadow={toggleTitleShadow}
          onDownloadThumbnail={onDownloadThumbnail}
          onRandomColor={changeColor.setRandomColor}
          randomColor={changeColor.randomColor}
          onTitleColorPalette={setTitleColorPalette}
          titleColorPalette={titleColorPalette}
          onSelectComponent={setSelectComponent}
          selectComponent={selectComponent}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
