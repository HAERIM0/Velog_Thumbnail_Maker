interface TitleParam {
  title: string;
  subtitle: string;
  category: string;
}

interface TitleProps {
  isTitleChange: boolean;
  isTitleShadow: boolean;
  isBottom?: number;
  titleColorPalette?: string;
  children?: React.ReactNode;
  isFontStyle: boolean;
}

type SelectComponentType = "all" | "titleCategory" | "title";
