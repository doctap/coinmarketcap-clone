import { Href } from '@/types';
import clsx from 'clsx';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

type UnionDefaultLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren;

export interface DefaultLinkProps extends UnionDefaultLinkProps {
  href?: Href
}

export const SmartLink = ({ children, className, href, ...rest }: DefaultLinkProps) => {
  if (!href) {
    return (
      <span className={clsx('!text-black/20 hover:!text-black/20', className)}>{children}</span>
    );
  }

  if (href.startsWith('/')) {
    const isAnchor = href.includes('#');

    return (
      <NextLink
        {...rest}
        className={className}
        href={href}
        prefetch={isAnchor}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <a
      {...rest}
      className={className}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};
