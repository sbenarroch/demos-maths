<template>
  <div id="#app">

    <nav class="navbar has-background-grey-dark">

      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo-demos-blanc.png" alt="Demos Maths">
        </router-link>
      </div>

      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
          <router-link to="/college" class="navbar-item has-text-light">Collège</router-link>
          <router-link to="/lycée" class="navbar-item has-text-light">Lycée</router-link>
          <router-link to="sup" class="navbar-item has-text-light">Supérieur</router-link>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/" class="button is-light">S'identifier</router-link>
          </div>
        </div>
      </div>

    </nav>

    <footer class="footer">Demos Maths - Sacha Benarroch-Lelong</footer>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro');

$grey:  #455a64;
$blue:  #3f51b5;
$grey-light:  #546e7a;
$green:  #8b9d6a;
$orange:  #FFC300;
$red:  #FF5733;

// Override variables
$family-sans-serif: "Source Sans Pro", sans-serif;
$grey-dark: $grey;
$grey-light: $grey-light;
$primary: $blue;
$success: $green;
$warning: $orange;
$danger: $red;

@import '../node_modules/bulma';

.navbar-item {
  color: light;
}
</style>
