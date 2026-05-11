// Explicit `require()` form is more reliably picked up by react-scripts/webpack than object shorthand.
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
