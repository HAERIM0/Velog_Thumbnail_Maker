import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const PreviewBox = styled.div`
  position: relative;
`;
export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  justify-content: flex-end;

  width: 768px;
  height: 402px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;
export const MainContainer = styled.div`
  display: flex;

  justify-content: space-between;

  width: 100vw;
`;

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

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  margin-top: 50px;
`;

export const Img = styled.img`
  width: 768px;
  height: 402px;
`;
