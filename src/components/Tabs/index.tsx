import { useState } from 'react';

import type { TabsProps } from './misc';
import * as S from './styles';

function Tabs({ ...props }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const { options } = props;

  return (
    <S.Container>
      {options.map(option => (
        <S.Tab
          onClick={() => setCurrentTab(option.value)}
          active={currentTab === option.value}
          type="button"
          key={option.value}
        >
          {option.label}
        </S.Tab>
      ))}
    </S.Container>
  );
}

export default Tabs;
