<template>
  <v-app-bar
    mb-5
    dark
    flat
    app
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    dense
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
    </template>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "navBar",
};
</script> 
 