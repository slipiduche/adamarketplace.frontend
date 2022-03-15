module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      lineHeight: {
        '60px': '60px',
        '36px': '36px',
        '84px': '84px',
      },
      maxWidth: {
        '5rem': '5rem',
        '100px': '100px',
        '389px': '389px',
        '490px': '490px',
        '410px': '410px',
        '565px': '565px',
        '1300px': '1300px',
      },
      fontSize:{
        '11px': '11px',
        '20px': '20px',
        '50px': '50px',
      },
      width: {
        '48p': '48%',
        '49p': '49%',
      },
      gridTemplateColumns: {
        'custom1': 'minmax(10px, 200px) repeat(6, 1fr)',
        'custom1s': 'minmax(10px, 180px) repeat(1, 1fr)',
        'custom2': 'minmax(10px, 400px) repeat(5, 1fr)',
        'custom2md': 'minmax(10px, 300px) repeat(5, 1fr)',
        'custom2sm': 'minmax(10px, 200px) repeat(5, 1fr)',
        'custom2xs': 'minmax(10px, 150px) repeat(5, 1fr)',
      },
      colors: {
        'gold': '#D7B065',
        'darkslategray': '#414662',
        'purple': '#834DA4',
      },

    },

  },
}
