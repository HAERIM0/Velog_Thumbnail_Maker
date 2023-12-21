import { atom } from "recoil";

export const ImgSrcAtom = atom<string | ArrayBuffer | null>({
  key: "ImgSrcAtom",
  default: "",
});
