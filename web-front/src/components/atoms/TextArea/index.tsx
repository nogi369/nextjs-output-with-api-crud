import { FC } from 'react';
import styles from './styles.module.css';

type props = JSX.IntrinsicElements['textarea'];

/**
 * TextArea
 * @param disabled
 * @param value
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const TextArea: FC<props> = ({ disabled = false, placeholder, value, onChange }) => (
  <textarea disabled={disabled} className={styles.text} placeholder={placeholder} value={value} onChange={onChange} />
);
