import { useState } from 'react';

import { CheckboxProps } from './misc';
import * as S from './styles';

function Checkbox({ onChangeChecked, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(prev => {
      const value = !prev;

      onChangeChecked(value);

      return value;
    });
  };

  return (
    <S.Container
      checked={checked}
      onChange={handleCheckbox}
      type="checkbox"
      {...props}
    />
  );
}

export default Checkbox;
