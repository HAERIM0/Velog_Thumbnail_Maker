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
    ToggleTitleChange,
    ToggleTitleShadow,
  } = useTitle();
  const { imgSrc } = useImgUpload();
  const { getRandomColor, onChangeColor, onChangeGradient } =
    useBackGroundColor();

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewContainer>
          <S.PreviewBox>
            {imgSrc ? (
              <S.Img src={imgSrc} />
            ) : (
              <S.Preview style={{ background: `${getRandomColor()}` }} />
            )}
          </S.PreviewBox>
          <S.TitleBox>
            <S.Title ColorReversal={titleChange} Shadow={titleShadow}>
              {titleData.Title}
            </S.Title>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={true}
              Shadow={titleShadow}
            >
              {titleData.Subtitle}
            </S.SubTitle>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={false}
              Shadow={titleShadow}
            >
              {titleData.Category}
            </S.SubTitle>
          </S.TitleBox>
        </S.PreviewContainer>
        <SideBar
          handleChangeColor={ToggleTitleChange}
          onChangeColor={onChangeColor}
          onChangeGradient={onChangeGradient}
          handleChangeShadow={ToggleTitleShadow}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
