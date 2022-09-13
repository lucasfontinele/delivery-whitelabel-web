import { useState, useCallback } from 'react';

import type { TabsProps } from './misc';
import * as S from './styles';

function Tabs({ ...props }: TabsProps) {
  const { options, onChangeTab } = props;

  const [currentTab, setCurrentTab] = useState(0);

  const handleValue = useCallback(
    (value: number) => {
      setCurrentTab(value);

      if (onChangeTab) {
        onChangeTab(value);
      }
    },
    [onChangeTab],
  );

  return (
    <S.Container>
      {options.map(option => (
        <S.Tab
          onClick={() => handleValue(option.value)}
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
