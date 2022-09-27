export type CategoriesScrollProps = {
  options: {
    id: number;
    label: string;
  }[];
};

export const mock: CategoriesScrollProps = {
  options: [
    {
      id: 0,
      label: 'Promoções',
    },
    {
      id: 1,
      label: 'Sanduíches',
    },
    {
      id: 2,
      label: 'Saladas',
    },
    {
      id: 3,
      label: 'Bebidas',
    },
    {
      id: 4,
      label: 'Combos',
    },
  ],
};
