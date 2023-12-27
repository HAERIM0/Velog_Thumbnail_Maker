import { MutableRefObject, useRef } from "react";
import { ImgSrcAtom } from "../store/Img.store";
import { useRecoilState } from "recoil";
import * as htmlToImage from "html-to-image";
import { blob } from "stream/consumers";

export const useImgUpload = () => {
  const ImgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useRecoilState<string | ArrayBuffer | null>(
    ImgSrcAtom
  );

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

  const onDownloadThumbnail = async () => {
    const card = cardRef.current;
    if (card) {
      const filter = (node: HTMLElement) => {
        return node.tagName !== "BUTTON";
      };

      const options = {
        filter,
        pixelRatio: 10,
        padding: 0,
      };

      htmlToImage.toBlob(card, { filter: filter }).then((blob) => {
        // saveas
      });
      // try{
      //   const blob = await htmlToImage.toBlob(card,options)

      // }
    }
  };

  return { onClickImg, ImgRef, onUploadImg, imgSrc };
};
