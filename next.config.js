const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withSass(withCSS(withTypescript()));
