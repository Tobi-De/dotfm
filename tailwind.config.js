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
                        color: "#94a3b8",
                        a: {
                            color: '#3182ce',
                            '&:hover': {
                                color: '#2c5282',
                            },
                        },
                        "h1, h2, h3, h4, h5, h6": {
                            color: "#ccd6f6"
                        },
                        "code, strong": {
                            color: "#c9d1d9"
                        },
                        ".codehilite": {
                            "border-radius": "0.25rem",
                            "font-size": "18px"
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