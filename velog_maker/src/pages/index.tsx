import type { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <SideBar />
    </>
  );
};

export default Home;
