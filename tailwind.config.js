/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'dotfm/templates/**/*.html'
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        //     color: "#94a3b8",
                        a: {
                            color: 'rgb(113 113 122)',
                            '&:hover': {
                                color: 'rgb(45 212 191)',
                            },
                        },
                        //     "h1, h2, h3, h4, h5, h6": {
                        //         color: "#ccd6f6"
                        //     },
                        // "code, strong": {
                        //     color: "#c9d1d9"
                        // },
                        ".codehilite": {
                            "border-radius": "0.25rem",
                            // "font-size": "18px",
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
