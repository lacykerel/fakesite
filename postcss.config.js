module.exports = {
  plugins: {
    'postcss-cssnext': {}, // allows to use latest css syntax
    'postcss-custom-media': {}, // W3C CSS Custom Media Queries to more compatible CSS 
    'lost': {}, // lost-grid
    'precss': {}, // Sass like markup
    'cssnano': { // css compression
      autoprefixer: false
    }
  }
}