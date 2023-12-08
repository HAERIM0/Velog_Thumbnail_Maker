import * as S from "./style";
import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTitle } from "../hooks/useTitle";

const Home: NextPage = () => {
  const { TitleData } = useTitle();
  console.log(TitleData);
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.PreviewBox>
          <S.Preview>
            <S.Title>{TitleData.Title}</S.Title>
            <S.SubTitle isBottom={true}>{TitleData.Subtitle}</S.SubTitle>
            <S.SubTitle isBottom={false}>{TitleData.Category}</S.SubTitle>
          </S.Preview>
        </S.PreviewBox>
        <SideBar />
      </S.MainContainer>
    </>
  );
};

export default Home;
