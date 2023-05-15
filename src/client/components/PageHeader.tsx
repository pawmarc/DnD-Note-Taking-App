import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { TextSizes } from '../types';

interface PageHeaderProps {
    children: React.ReactNode,
    textSize?: TextSizes,
    className?: string

}



const PageHeader = ({ children, className, textSize }: PageHeaderProps) => {

    const classes = twMerge(
        'text-3xl prose text-teal-100', className, clsx({
            [`text-${textSize}`]: textSize,
        })
    )

    return (
        <h1 className={classes}>{children}</h1>
    )
}

export default PageHeader;