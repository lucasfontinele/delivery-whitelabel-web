export type TabType = {
  label: string;
  value: number;
};

export type TabsProps = {
  options: TabType[];
};

export const mock: TabsProps = {
  options: [
    {
      label: 'Entrega',
      value: 0,
    },
    {
      label: 'Retirada',
      value: 1,
    },
  ],
};
