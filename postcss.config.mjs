const config = {
    plugins: {
        '@tailwindcss/postcss': {},
    },
    variants: {
        extend: {
            backgroundOpacity: ['active'],
        },
        theme: {
            extend: {
                backgroundOpacity: {
                    10: '0.1',
                    20: '0.2',
                    95: '0.95',
                },
            },
        },
    },
}

export default config
