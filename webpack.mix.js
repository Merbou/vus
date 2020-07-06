const mix = require('laravel-mix');











mix.webpackConfig({
   resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
         'vue$': 'vue/dist/vue.esm.js',
         '@': __dirname + '/resources/vendor',
      },
   },
   
});


if (mix.inProduction()) {
   const uglifyjs = require('uglifyjs-webpack-plugin');

   mix.webpackConfig({
      //save space 
      plugins: [new uglifyjs()]
   });
} else {
   // Development settings
   mix.sourceMaps()
      .webpackConfig({
         devtool: 'cheap-eval-source-map' // Fastest for development
      });
}




mix.js('resources/vendor/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');


