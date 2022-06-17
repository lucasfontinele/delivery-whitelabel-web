import clsx from 'clsx';

import type { AlertProps } from './Alert.misc';
import styles from './Alert.styles.module.scss';

function Alert({ ...props }: AlertProps) {
  const { type, message } = props;

  return (
    <span className={clsx(styles.container, styles[type])}>{message}</span>
  );
}

export default Alert;
