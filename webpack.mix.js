const mix = require('laravel-mix');



// mix.options({
//    extractVueStyles: true,
// })
// mix.options( { processCssUrls: mix.inProduction() } );

mix.webpackConfig({
   resolve: {
      // extensions: ['.js', '.vue', '.json'],
      alias: {
         'vue$': mix.inProduction() ? 'vue/dist/vue.runtime.esm.js' : 'vue/dist/vue.esm.js',
         '@': __dirname + '/resources/vendor',
      },
   },

});

mix.extract()



mix.js('resources/vendor/app.js', 'public/js');
   // .sass('resources/sass/app.scss', 'public/css');


