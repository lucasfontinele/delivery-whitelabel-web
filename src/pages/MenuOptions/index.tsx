import Option1 from './option1';
import Option2 from './option2';

type Props = {
  option: number;
};

function MenuOptions({ option = 1 }: Props) {
  return (
    <>
      {option === 1 && <Option1 />}
      {option === 2 && <Option2 />}
    </>
  );
}

export default MenuOptions;
