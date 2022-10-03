import * as S from './styles';

type week = {
  day: string;
  open: string;
  close: string;
};

function OpeningHours({ day, open, close }: week) {
  return (
    <S.ListContainer>
      <S.ListItem>
        <p>{day}</p>
        <p>
          {open} - {close}
        </p>
        <S.Divisor />
      </S.ListItem>
    </S.ListContainer>
  );
}

export default OpeningHours;
