import { atom } from "recoil";

export const TitleStateAtom = atom<TitleParam>({
  key: "TitleStateAtom",
  default: {
    Title: "제목을 입력하세요",
    Subtitle: "부제목을 입력하세요",
    Category: "분류를 입력하세요",
  },
});
