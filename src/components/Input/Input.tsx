import React from 'react';

import type { InputProps } from './Input.misc';
import styles from './Input.styles.module.scss';

function Input({ ...props }: InputProps) {
  const { error } = props;

  return (
    <div className={styles.wrapper}>
      <input placeholder="Here some placeholder" className={styles.container} />
      {error ? (
        <small className={styles.errorMessage}>{error}</small>
      ) : undefined}
    </div>
  );
}

export default Input;
