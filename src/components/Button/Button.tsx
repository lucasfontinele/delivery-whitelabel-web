import clsx from 'clsx';

import type { ButtonProps } from './Button.misc';
import styles from './Button.styles.module.scss';

function Button({ ...props }: ButtonProps) {
  const { children, content, variant } = props;

  return (
    <button
      className={clsx(styles.container, styles[content], styles[variant])}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
