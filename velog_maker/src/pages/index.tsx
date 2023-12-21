import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";
import { useBackGroundColor } from "../hooks/useColor";

const Home: NextPage = () => {
  const { TitleData } = useTitle();
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
            <S.Title>{TitleData.Title}</S.Title>
            <S.SubTitle isBottom={true}>{TitleData.Subtitle}</S.SubTitle>
            <S.SubTitle isBottom={false}>{TitleData.Category}</S.SubTitle>
          </S.TitleBox>
        </S.PreviewContainer>
        <SideBar
          onChangeColor={onChangeColor}
          onChangeGradient={onChangeGradient}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
