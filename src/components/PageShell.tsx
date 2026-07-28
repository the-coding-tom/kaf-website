import type { ReactNode } from "react";
import styles from "./PageShell.module.css";

type PageShellProps = {
  children: ReactNode;
  /**
   * Extra class on the frame. Mainly a hook for overriding the layout custom
   * properties on pages the design draws to a different gutter.
   */
  className?: string;
};

export default function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={className ? `${styles.page} ${className}` : styles.page}>
      {children}
    </div>
  );
}
