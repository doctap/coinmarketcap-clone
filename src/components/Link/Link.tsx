import { SmartLink } from '@/shared';
import type { ExtraProps, Href } from '@/types';
import clsx from 'clsx';
// import NextImage from 'next/image';
import React from 'react';

const animationClassName = 'transition-transform duration-300 ease-out';

const colors = {
  default: 'text-link-foreground fill-link-foreground',
  accent: 'text-accent-link-foreground fill-accent-link-foreground',
};

// const icons = {};

const sizes = {
  small: {
    link: 'text-20-vintage font-vintage gap-10 px-2 py-8',
    icon: 'mt-6 h-8 w-12',
  },
  large: {
    link: 'text-20-vintage lg:text-26-vintage font-vintage gap-10 px-2 py-8 lg:gap-14 lg:px-10 lg:py-8',
    icon: 'mt-6 h-8 w-12 lg:mt-8 lg:h-11 lg:w-17',
  },
};

export const Link = ({
  href,
  title,
  color = 'default',
  // withArrow = false,
  className,
  target,
  size = 'large',
}: ExtraProps & {
  href: Href;
  title: string;
  color?: 'accent' | 'default';
  withArrow?: boolean;
  target?: '_blank' | '_self';
  size?: 'small' | 'large';
}) => (
  <SmartLink
    className={clsx(
      'group inline-flex cursor-pointer items-center',
      colors[color],
      sizes[size].link,
      className
    )}
    href={href}
    target={target}
  >
    <span className={clsx(animationClassName, 'group-hover:-translate-x-3')}>{title}</span>
    {/* {withArrow && (
      <NextImage
        src={icons[color]}
        alt=''
        width={17}
        height={11}
        className={clsx(animationClassName, sizes[size].icon, 'group-hover:translate-x-3')}
      />
    )} */}
  </SmartLink>
);
