import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

import { ComponentSizes, ComponentColors } from '../types';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    bordered?: boolean;
    variant?: ComponentColors;
    sizing?: ComponentSizes;
}

const Input = ({
    value,
    placeholder,
    type,
    className,
    variant,
    sizing,
    autoComplete,
    bordered = true,
    ...rest }: InputProps) => {

    const classes = twMerge(
        'input',
        className, clsx({
            'input-bordered': bordered,
            [`input-${variant}`]: variant,
            [`input-${sizing}`]: sizing,
        })
    );

    return (
        <input {...rest} autoComplete={autoComplete} className={classes} value={value} type={type} placeholder={placeholder} />
    )
}

export default Input;