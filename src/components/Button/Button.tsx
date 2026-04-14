import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost';

function classes(variant: Variant, extra?: string): string {
  const v = variant === 'primary' ? styles.primary : styles.ghost;
  return [styles.btn, v, extra].filter(Boolean).join(' ');
}

interface ButtonBase {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonBase & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonBase & LinkProps) {
  return (
    <Link className={classes(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classes(variant, className)} {...rest}>
      {children}
    </a>
  );
}

