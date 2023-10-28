import Link from "next/link";
import styles from "./styles.module.css";
import { FC } from "react";

type Props = {
  title: string;
  linkPath: string;
};

export const NavigationLink: FC<Props> = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link href={linkPath}>{title}</Link>
  </li>
);
// Link使い方
// <Link to="page1">Sample Page1</Link>
