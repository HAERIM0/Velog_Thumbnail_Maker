import * as S from "./style";

const TitlePreview = ({
  isTitleChange,
  titleColorPalette,
  isTitleShadow,
  isFontStyle,
  isBottom,
  children,
}: TitleProps) => {
  return (
    <S.Title
      isColorReversal={isTitleChange}
      isShadow={isTitleShadow}
      style={{ color: `${titleColorPalette}` }}
      isFontStyle={isFontStyle}
      isBottom={isBottom}
    >
      {children}
    </S.Title>
  );
};

export default TitlePreview;
