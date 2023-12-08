import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { TitleStateAtom } from "../store/Title.store";

export const useTitle = () => {
  const [TitleData, setTitleData] = useRecoilState<object | any>(
    TitleStateAtom
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setTitleData((prev: any) => ({ ...prev, [name]: value }));
    },
    [setTitleData]
  );
  return {
    handleTitleChange,
    TitleData,
  };
};
