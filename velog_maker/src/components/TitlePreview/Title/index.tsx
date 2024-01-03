import { useTitle } from "../../../hooks/useTitle";
import * as S from "../style";

interface TitleProps {
  titleChange: boolean;
  titleShadow: boolean;
  titleColorPalette: string;
}

const Title = ({ titleChange, titleShadow, titleColorPalette }: TitleProps) => {
  const { titleData } = useTitle();
  return (
    <S.Title
      ColorReversal={titleChange}
      Shadow={titleShadow}
      style={{ color: `${titleColorPalette}` }}
    >
      {titleData.title}
    </S.Title>
  );
};

export default Title;
