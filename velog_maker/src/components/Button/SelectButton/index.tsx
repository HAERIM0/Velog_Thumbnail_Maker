import * as S from "./style";

interface Props {
  children: React.ReactNode;
  width: number;
  onclick?: (e: React.FormEvent) => void;
  padding: boolean;
  backgroundcolor?: string;
  color?: string;
}

const SelectButton = ({
  children,
  width,
  onclick,
  padding,
  backgroundcolor,
  color,
}: Props) => {
  return (
    <>
      <S.ButtonContainer padding={padding}>
        <S.SelectButton
          style={{
            width: `${width}px`,
            backgroundColor: `${backgroundcolor}`,
            color: `${color}`,
          }}
          onClick={onclick}
        >
          {children}
        </S.SelectButton>
      </S.ButtonContainer>
    </>
  );
};

export default SelectButton;
