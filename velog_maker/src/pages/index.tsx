import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";
import { useImgUpload } from "../hooks/useImgUpload";

const Home: NextPage = () => {
  const { TitleData } = useTitle();
  const { imgSrc } = useImgUpload();

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewContainer>
          <S.PreviewBox>
            {imgSrc ? <S.Img src={imgSrc} /> : <S.Preview />}
          </S.PreviewBox>
          <S.TitleBox>
            <S.Title>{TitleData.Title}</S.Title>
            <S.SubTitle isBottom={true}>{TitleData.Subtitle}</S.SubTitle>
            <S.SubTitle isBottom={false}>{TitleData.Category}</S.SubTitle>
          </S.TitleBox>
        </S.PreviewContainer>
        <SideBar />
      </S.MainContainer>
    </>
  );
};

export default Home;
