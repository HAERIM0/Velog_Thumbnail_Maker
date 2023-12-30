import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { TitleStateAtom } from "../store/Title.store";
import useBooleanToggle from "./useBooleanToggle";

export const useTitle = () => {
  const [titleData, setTitleData] = useRecoilState(TitleStateAtom);
  const [titleChange, toggleTitleChange] = useBooleanToggle(true);
  const [titleShadow, toggleTitleShadow] = useBooleanToggle(true);

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
  };
};
