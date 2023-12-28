import { atom } from "recoil";

export const HideHeader = atom<boolean>({
  key: "HideHeader",
  default: false,
});
