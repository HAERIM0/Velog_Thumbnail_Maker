import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";
import { useBackGroundColor } from "../hooks/useColor";

const Home: NextPage = () => {
  const {
    TitleData,
    titleChange,
    handleChangeColor,
    titleShadow,
    handleChangeShadow,
  } = useTitle();
  const { imgSrc } = useImgUpload();
  const { getRandomColor, onChangeColor, onChangeGradient } =
    useBackGroundColor();

  console.log(getRandomColor());

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewContainer>
          {/* <div style={{ backgroundColor: `${getRandomColor()}` }}>ggdgd</div> */}
          <S.PreviewBox>
            {imgSrc ? (
              <S.Img src={imgSrc} />
            ) : (
              <S.Preview style={{ background: `${getRandomColor()}` }} />
            )}
          </S.PreviewBox>
          <S.TitleBox>
            <S.Title ColorReversal={titleChange} Shadow={titleShadow}>
              {TitleData.Title}
            </S.Title>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={true}
              Shadow={titleShadow}
            >
              {TitleData.Subtitle}
            </S.SubTitle>
            <S.SubTitle
              ColorReversal={titleChange}
              isBottom={false}
              Shadow={titleShadow}
            >
              {TitleData.Category}
            </S.SubTitle>
          </S.TitleBox>
        </S.PreviewContainer>
        <SideBar
          handleChangeColor={handleChangeColor}
          onChangeColor={onChangeColor}
          onChangeGradient={onChangeGradient}
          handleChangeShadow={handleChangeShadow}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
