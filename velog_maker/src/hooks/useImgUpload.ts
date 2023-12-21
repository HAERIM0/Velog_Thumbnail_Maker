import { MutableRefObject, useRef } from "react";
import { ImgSrcAtom } from "../store/Img.store";
import { useRecoilState } from "recoil";

export const useImgUpload = () => {
  const ImgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [imgSrc, setImgSrc] = useRecoilState<string | any>(ImgSrcAtom);

  const onClickImg = () => {
    if (ImgRef.current) {
      ImgRef.current.click();
    }
  };

  const onUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files!!;
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result || null);
      };
    });
  };

  return { onClickImg, ImgRef, onUploadImg, imgSrc };
};
