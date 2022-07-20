import type { SnackbarProps } from './Snackbar.misc';
import styles from './Snackbar.styles.module.scss';

function Snackbar({ ...props }: SnackbarProps) {
  return (
    <div className={styles.container}>
      <h1>Snackbar</h1>
    </div>
  );
}

export default Snackbar;
