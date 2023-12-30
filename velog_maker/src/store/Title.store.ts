import { atom } from "recoil";

export const TitleStateAtom = atom<TitleParam>({
  key: "TitleStateAtom",
  default: {
    title: "제목을 입력하세요",
    subtitle: "부제목을 입력하세요",
    category: "분류를 입력하세요",
  },
});
