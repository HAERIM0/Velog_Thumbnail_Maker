import styled from "styled-components";

interface TitleStyleProps {
  isBottom?: number;
  isColorReversal: boolean;
  isShadow: boolean;
  isFontStyle: boolean;
}

export const Title = styled.div<TitleStyleProps>`
  font-size: ${(props) => (props.isFontStyle ? "54px" : "24px")};
  font-weight: ${(props) => (props.isFontStyle ? "700" : "")};
  color: ${(props) => (props.isColorReversal ? "black" : "white")};
  margin-bottom: ${(props) => props.isBottom}px;

  text-shadow: ${(props) => (props.isShadow ? "" : "2px 2px 2px gray")};
`;
