import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";
import { useBackGroundColor } from "../hooks/useColor";
import Title from "../components/TitlePreview/Title";
import SubTitle from "../components/TitlePreview/SubTitle";
import Category from "../components/TitlePreview/Category";

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
  } = useTitle();
  const { imgSrc, onDownloadThumbnail, cardRef } = useImgUpload();
  const { changeColor } = useBackGroundColor();

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
          <S.TitleContainer>
            {selectComponent === "all" && (
              <S.TitleBox Top={180}>
                <Title
                  titleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  titleShadow={titleShadow}
                />
                <SubTitle
                  isTitleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  isTitleShadow={titleShadow}
                />
                <Category
                  isTitleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  isTitleShadow={titleShadow}
                />
              </S.TitleBox>
            )}

            {selectComponent === "titleCategory" && (
              <S.TitleBox Top={90}>
                <Title
                  titleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  titleShadow={titleShadow}
                />

                <Category
                  isTitleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  isTitleShadow={titleShadow}
                />
              </S.TitleBox>
            )}

            {selectComponent === "title" && (
              <>
                <Title
                  titleChange={titleChange}
                  titleColorPalette={titleColorPalette}
                  titleShadow={titleShadow}
                />
              </>
            )}
          </S.TitleContainer>
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
