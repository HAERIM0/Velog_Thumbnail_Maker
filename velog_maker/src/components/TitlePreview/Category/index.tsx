import { useTitle } from "../../../hooks/useTitle";
import * as S from "../style";

interface TitleCategoryProps {
  isTitleChange: boolean;
  isTitleShadow: boolean;
  titleColorPalette: string;
}

const Category = ({
  isTitleChange,
  titleColorPalette,
  isTitleShadow,
}: TitleCategoryProps) => {
  const { titleData } = useTitle();
  return (
    <S.SubTitle
      ColorReversal={isTitleChange}
      isBottom={true}
      Shadow={isTitleShadow}
      style={{ color: `${titleColorPalette}` }}
    >
      {titleData.category}
    </S.SubTitle>
  );
};

export default Category;
