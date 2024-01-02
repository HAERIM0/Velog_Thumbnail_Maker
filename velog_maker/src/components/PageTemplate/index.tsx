import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { HideTitle } from "../../stores/Common/common.store";
// import Test from "../TEST";
import { NextPageContext } from "next";

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  const hideTitle = useRecoilValue(HideTitle);
  return (
    <>
      {/* {!hideTitle && <Test />} */}
      <>{children}</>
    </>
  );
}
