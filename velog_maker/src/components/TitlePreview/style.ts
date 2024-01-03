import styled from "styled-components";

export const Title = styled.div<{ ColorReversal: boolean; Shadow: boolean }>`
  font-size: 54px;
  font-weight: 700;
  color: ${(props) => (props.ColorReversal ? "black" : "white")};

  margin-bottom: 25px;
  text-shadow: ${(props) => (props.Shadow ? "" : "2px 2px 2px gray")};
`;

export const SubTitle = styled.div<{
  isBottom: boolean;
  ColorReversal: boolean;
  Shadow: boolean;
}>`
  margin-bottom: ${(props) => (props.isBottom ? "90px" : "-55px")};

  font-size: 24px;
  color: ${(props) => (props.ColorReversal ? "black" : "white")};
  text-shadow: ${(props) => (props.Shadow ? "" : "2px 2px 2px gray")};
`;
