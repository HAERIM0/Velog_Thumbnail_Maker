import { atom } from "recoil";

export const ImgSrcAtom = atom<string | any>({
  key: "ImgSrcAtom",
  default: "",
});
