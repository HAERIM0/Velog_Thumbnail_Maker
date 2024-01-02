import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { TitleStateAtom } from "../stores/Title.store";
import useBooleanToggle from "../utils/Toggle/useBooleanToggle";

export const useTitle = () => {
  const [titleData, setTitleData] = useRecoilState(TitleStateAtom);
  const [titleChange, toggleTitleChange] = useBooleanToggle(true);
  const [titleShadow, toggleTitleShadow] = useBooleanToggle(true);
  const [titlePalette, toggleTitlePalette] = useBooleanToggle(false);
  const [titleColorPalette, setTitleColorPalette] = useState<string>("");

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setTitleData((prev) => ({ ...prev, [name]: value }));
    },
    [setTitleData]
  );

  return {
    handleTitleChange,
    titleData,
    titleChange,
    toggleTitleChange,
    toggleTitleShadow,
    titleShadow,
    titlePalette,
    toggleTitlePalette,
    titleColorPalette,
    setTitleColorPalette,
  };
};
