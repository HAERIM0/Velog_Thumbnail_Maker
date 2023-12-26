import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { TitleStateAtom } from "../store/Title.store";
import useBooleanToggle from "./useBooleanToggle";

export const useTitle = () => {
  const [TitleData, setTitleData] = useRecoilState(TitleStateAtom);
  const [titleChange, ToggleTitleChange] = useBooleanToggle(false);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setTitleData((prev: any) => ({ ...prev, [name]: value }));
    },
    [setTitleData]
  );

  const handleChangeColor = () => {
    ToggleTitleChange();
  };

  return {
    handleTitleChange,
    TitleData,
    titleChange,
    handleChangeColor,
  };
};
