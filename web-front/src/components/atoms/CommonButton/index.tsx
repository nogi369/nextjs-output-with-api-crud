import styles from './styles.module.css';
import { FC } from 'react';

type Props = JSX.IntrinsicElements['button'];

/**
 * CommonButton
 * @param type
 * @param title
 * @param onClick
 * @constructor
 */
export const CommonButton: FC<Props> = ({ title, type, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {title}
  </button>
);
