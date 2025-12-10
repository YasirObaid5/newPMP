
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // I can add custom colors here if needed, but I used CSS variables in index.css
                // which is fine. Tailwind classes will work alongside them.
            }
        },
    },
    plugins: [],
}
