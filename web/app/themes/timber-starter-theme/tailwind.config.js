module.exports = {
  purge: {
    //enabled: process.env.NODE_ENV === 'production',
    content: ['./templates/**/*.twig']
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
