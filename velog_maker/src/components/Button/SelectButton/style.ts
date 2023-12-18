import styled from "styled-components";

export const ButtonContainer = styled.div<{ padding: boolean }>`
  padding-left: ${(props) => (props.padding ? "25px" : "0")};

  cursor: pointer;
`;
export const SelectButton = styled.button<{ color?: boolean }>`
  height: 40px;
  background-color: #e2e4eb;

  border: 0;
  border-radius: 5px;

  margin-bottom: 10px;

  font-size: 16px;
`;
