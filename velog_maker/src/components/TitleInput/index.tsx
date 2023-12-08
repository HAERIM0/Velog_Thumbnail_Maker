import * as S from "./style";

interface TitleProps {
  id: string;
  placeholder: string;
  name: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const TitleInput = ({ id, placeholder, name, onchange }: TitleProps) => {
  return (
    <>
      <S.TitleContainer>
        <S.TitleInput
          placeholder={placeholder}
          onChange={onchange}
          id={id}
          name={name}
        />
      </S.TitleContainer>
    </>
  );
};

export default TitleInput;
