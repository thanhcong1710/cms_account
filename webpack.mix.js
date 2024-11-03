const path = require('path');
const mix = require('laravel-mix');



mix.webpackConfig({
   resolve: {
      alias: {
         "@": "..",
         'static': path.resolve(__dirname, 'resources/static/'),
      }
   }
});



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', path.resolve(__dirname, '/home/account/public_html/js'))
   .sass('resources/sass/app.scss', path.resolve(__dirname, '/home/account/public_html/css'));

mix.copy('resources/coreui/public', path.resolve(__dirname, '/home/account/public_html'));


