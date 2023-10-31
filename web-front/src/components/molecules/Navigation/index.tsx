import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import styles from './styles.module.css';
import { FC } from 'react';

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation: FC = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
      <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
    </ul>
  </nav>
);

// <Link to={linkPath}>{title}</Link>;

// navタグ
// https://style.potepan.com/articles/21440.html
