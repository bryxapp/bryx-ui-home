import React from "react";
import styles from "../home.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.container}> {children}</div>;
}