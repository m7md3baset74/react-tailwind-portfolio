import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
