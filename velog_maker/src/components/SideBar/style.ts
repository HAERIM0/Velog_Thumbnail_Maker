import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 60px;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 95vh;

  background-color: #f5f5f5;
`;

export const Title = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;

  padding-left: 25px;
  margin-bottom: 12px;
`;

export const SideBarItem = styled.div`
  margin-top: 30px;
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const PopupContainer = styled.div`
  position: absolute;
  padding-left: 25px;
`;
