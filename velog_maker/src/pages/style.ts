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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
`;

export const Img = styled.img`
  width: 768px;
  height: 402px;
`;

export const TitleBox = styled.div<{ Top: number }>`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.Top}px;
  align-items: center;
`;
