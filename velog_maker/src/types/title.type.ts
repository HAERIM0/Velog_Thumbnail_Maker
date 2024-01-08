interface TitleParam {
  title: string;
  subtitle: string;
  category: string;
}

interface SubTitleProps {
  isTitleChange: boolean;
  isTitleShadow: boolean;
  titleColorPalette: string;
}

type SelectComponentType = "all" | "titleCategory" | "title";
