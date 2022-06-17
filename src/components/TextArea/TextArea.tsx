import type { TextAreaProps } from './TextArea.misc';
import styles from './TextArea.styles.module.scss';

function TextArea({ ...props }: TextAreaProps) {
  const { error } = props;

  return (
    <div className={styles.wrapper}>
      <textarea className={styles.container} {...props} />
      <small className={styles.error}>{error}</small>
    </div>
  );
}

export default TextArea;
