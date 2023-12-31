import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  background-color: #4d7a96;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Title = styled.h3`
  padding-left: 20px;

  cursor: pointer;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;

  padding-right: 20px;
`;
