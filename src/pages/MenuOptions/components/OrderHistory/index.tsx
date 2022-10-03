import * as S from './styles';

type AdditionalItem = {
  id: string;
  name: string;
  value: string;
};

type orderItem = {
  date: string;
  item: string;
  itemValue: string;
  total: string;
  additionalItem: AdditionalItem[];
  color: boolean;
};

function OrderHistory({
  date,
  item,
  itemValue,
  total,
  additionalItem,
  color = false,
}: orderItem) {
  return (
    <S.ContainerBackground backgroundColor={color}>
      <S.Container>
        <S.TitleOrder>{date}</S.TitleOrder>

        <S.OrderItem>
          <p>{item}</p>
          <p>{itemValue}</p>
        </S.OrderItem>

        {additionalItem.map(addItem => {
          return (
            <S.AdditionalItem key={addItem.id}>
              <p>{addItem.name}</p>
              <p>R$ {addItem.value}</p>
            </S.AdditionalItem>
          );
        })}

        <S.Divisor />
        <S.Total>
          <p>Total</p>
          <p>R$ {total}</p>
        </S.Total>
      </S.Container>
    </S.ContainerBackground>
  );
}

export default OrderHistory;
