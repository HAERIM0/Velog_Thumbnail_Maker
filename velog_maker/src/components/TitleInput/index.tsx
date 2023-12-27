import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface TitleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  name: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const TitleInput = ({
  id,
  placeholder,
  name,
  onchange,
  ...props
}: TitleInputProps) => {
  return (
    <>
      <S.TitleContainer>
        <S.TitleInput
          placeholder={placeholder}
          onChange={onchange}
          id={id}
          name={name}
          {...props}
        />
      </S.TitleContainer>
    </>
  );
};

export default TitleInput;
