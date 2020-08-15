const mix = require('laravel-mix');

require('vuetifyjs-mix-extension')

mix.webpackConfig({
   resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
         'vue$': mix.inProduction() ? 'vue/dist/vue.runtime.esm.js' : 'vue/dist/vue.esm.js',
         '@': __dirname + '/resources/vendor',

      },
   },
});

mix.js('resources/vendor/app.js', 'public/js').vuetify().extract();
