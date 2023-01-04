import React from "react";
import sharedStyles from "../shared.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={sharedStyles.container}> {children}</div>;
}