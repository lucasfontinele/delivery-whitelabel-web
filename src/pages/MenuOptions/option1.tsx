import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadImage from 'components/HeadImage';
import HeartIcon from 'components/Icons/Heart';
import ShareIcon from 'components/Icons/Share';

import OrderHistory from './components/OrderHistory';

import * as S from './styles';
import OpeningHours from './components/OpeningHours';

const orderItems = [
  {
    date: '04/02/2022',
    item: 'Salada Tropical',
    itemValue: '1 Hambúrguer de Aveia e Quinoa',
    total: '24,90',
    additionalItem: [
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
    ],
  },
  {
    date: '04/02/2022',
    item: 'Salada Tropical',
    itemValue: '1 Hambúrguer de Aveia e Quinoa',
    total: '24,90',
    additionalItem: [
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
    ],
  },
  {
    date: '04/02/2022',
    item: 'Salada Tropical',
    itemValue: '1 Hambúrguer de Aveia e Quinoa',
    total: '24,90',
    additionalItem: [
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
      {
        id: 'ad093',
        name: '1 Confit de alho',
        value: '0,90',
      },
    ],
  },
];

const week = [
  {
    day: 'Segunda-feira',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Terça-feira',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Quarta-feira',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Quinta-feira',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Sexta-feira',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Sábado',
    open: '7h',
    close: '21h',
  },
  {
    day: 'Domingo',
    open: '7h',
    close: '21h',
  },
];

function Option1() {
  const navigate = useNavigate();

  const handleBackButton = useCallback(() => {
    if (!navigate) return;
    navigate(-1);
  }, [navigate]);

  return (
    <S.Container>
      <HeadImage
        imageUrl="https://i.imgur.com/1jLCNwa.png"
        handleBackButton={handleBackButton}
        rightContent={
          <S.MenuIcons>
            <HeartIcon />
            <ShareIcon />
          </S.MenuIcons>
        }
      />

      <S.CardContainer>
        <S.Content>
          <S.Title>Quiosque do Bem</S.Title>
          <S.AddressContainer>
            <S.AddressLabel>Endereço</S.AddressLabel>
            <S.AddressDescription>
              Avenida Vieira Souto – em frente à R. Garcia Davila
            </S.AddressDescription>
          </S.AddressContainer>

          <S.TitleLabel>Horário de Funcionamento</S.TitleLabel>
          {week.map(weekItem => {
            return (
              <OpeningHours
                day={weekItem.day}
                open={weekItem.open}
                close={weekItem.close}
              />
            );
          })}

          <S.TitleLabel>Histórico de Pedidos</S.TitleLabel>
          {orderItems.map((item, index) => {
            return (
              <OrderHistory
                item={item.item}
                date={item.date}
                itemValue={item.itemValue}
                total={item.total}
                additionalItem={item.additionalItem}
                color={index % 2 === 0}
              />
            );
          })}
        </S.Content>
      </S.CardContainer>
    </S.Container>
  );
}

export default Option1;
