import Link from "next/link";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Title>Velog_Maker</S.Title>
      <Link
        href="https://github.com/HAERIM0/Velog_Thumbnail_Maker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <S.Icon src="/githubicon.png" alt="githubicon" />
      </Link>
    </S.HeaderContainer>
  );
};

export default Header;
