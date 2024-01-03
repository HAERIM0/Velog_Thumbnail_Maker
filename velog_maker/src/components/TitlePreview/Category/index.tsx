import { useTitle } from "../../../hooks/useTitle";
import * as S from "../style";

interface CategoryProps {
  titleChange: boolean;
  titleShadow: boolean;
  titleColorPalette: string;
}

const Category = ({
  titleChange,
  titleColorPalette,
  titleShadow,
}: CategoryProps) => {
  const { titleData } = useTitle();
  return (
    <S.SubTitle
      ColorReversal={titleChange}
      isBottom={true}
      Shadow={titleShadow}
      style={{ color: `${titleColorPalette}` }}
    >
      {titleData.category}
    </S.SubTitle>
  );
};

export default Category;
