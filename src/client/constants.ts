export const brandColors = ['primary', 'secondary', 'accent'] as const;
export const statusColors = ['info', 'success', 'warning', 'error'] as const;

export const componentColors = [
    ...brandColors,
    ...statusColors,
    'ghost',
] as const;

export const componentSizes = ['lg', 'md', 'sm', 'xs'] as const;

export const textSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] as const;