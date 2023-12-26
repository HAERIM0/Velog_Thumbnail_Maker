import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { TitleStateAtom } from "../store/Title.store";

export const useTitle = () => {
  const [TitleData, setTitleData] = useRecoilState(TitleStateAtom);
  const [titleChange, setTitleChange] = useState<boolean>(true);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setTitleData((prev: any) => ({ ...prev, [name]: value }));
    },
    [setTitleData]
  );

  const handleChangeColor = () => {
    setTitleChange(!titleChange);
  };

  return {
    handleTitleChange,
    TitleData,
    titleChange,
    handleChangeColor,
  };
};
