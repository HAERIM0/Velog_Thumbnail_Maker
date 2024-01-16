import * as S from "./style";

interface SelectButtonProps {
  children: React.ReactNode;
  width: number;
  padding?: number;
  backgroundColor?: string;
  color?: string;
  onClick?: (e: React.FormEvent) => void;
}

const SelectButton = ({
  children,
  width,
  onClick,
  padding,
  backgroundColor,
  color,
}: SelectButtonProps) => {
  return (
    <>
      <S.ButtonContainer padding={padding}>
        <S.SelectButton
          style={{
            width: `${width}px`,
            backgroundColor: `${backgroundColor}`,
            color: `${color}`,
          }}
          onClick={onClick}
        >
          {children}
        </S.SelectButton>
      </S.ButtonContainer>
    </>
  );
};

export default SelectButton;
