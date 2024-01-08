import { useTitle } from "../../../hooks/useTitle";
import * as S from "../style";

const SubTitle = ({
  isTitleChange,
  titleColorPalette,
  isTitleShadow,
}: SubTitleProps) => {
  const { titleData } = useTitle();
  return (
    <S.SubTitle
      ColorReversal={isTitleChange}
      isBottom={true}
      Shadow={isTitleShadow}
      style={{ color: `${titleColorPalette}` }}
    >
      {titleData.subtitle}
    </S.SubTitle>
  );
};

export default SubTitle;
