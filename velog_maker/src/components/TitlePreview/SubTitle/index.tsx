import { useTitle } from "../../../hooks/useTitle";
import * as S from "../style";

interface SubTitleProps {
  titleChange: boolean;
  titleShadow: boolean;
  titleColorPalette: string;
}

const SubTitle = ({
  titleChange,
  titleColorPalette,
  titleShadow,
}: SubTitleProps) => {
  const { titleData } = useTitle();
  return (
    <S.SubTitle
      ColorReversal={titleChange}
      isBottom={true}
      Shadow={titleShadow}
      style={{ color: `${titleColorPalette}` }}
    >
      {titleData.subtitle}
    </S.SubTitle>
  );
};

export default SubTitle;
