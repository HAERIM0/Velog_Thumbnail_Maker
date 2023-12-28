import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";
import { useBackGroundColor } from "../hooks/useColor";

const Home: NextPage = () => {
  const {
    titleData,
    titleChange,
    titleShadow,
    toggleTitleChange,
    toggleTitleShadow,
  } = useTitle();
  const { imgSrc, onDownloadThumbnail, cardRef } = useImgUpload();
  const { getRandomColor, onChangeColor, onChangeGradient } =
    useBackGroundColor();

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewContainer ref={cardRef}>
          <S.PreviewBox>
            {imgSrc ? (
              <S.Img src={imgSrc} />
            ) : (
              <S.Preview style={{ background: `${getRandomColor()}` }} />
            )}
          </S.PreviewBox>
          <S.TitleBox>
            <S.Title ColorReversal={titleChange} Shadow={titleShadow}>
              {titleData.title}
            </S.Title>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={true}
              Shadow={titleShadow}
            >
              {titleData.subtitle}
            </S.SubTitle>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={false}
              Shadow={titleShadow}
            >
              {titleData.category}
            </S.SubTitle>
          </S.TitleBox>
        </S.PreviewContainer>
        <SideBar
          onChangeTitleColor={toggleTitleChange}
          onChangeColor={onChangeColor}
          onChangeGradient={onChangeGradient}
          onChangeTitleShadow={toggleTitleShadow}
          onDownloadThumbnail={onDownloadThumbnail}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
