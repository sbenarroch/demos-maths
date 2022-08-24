<template>
  <div id="wrapper">

    <nav class="bd-navbar navbar is-primary">

      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo-demos-2.png" alt="Demos Maths"/>
        </router-link>
      </div>

      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
          <router-link to="/college" class="navbar-item">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <span>Collège </span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <router-link to="/college/sixieme" class="dropdown-item test">Sixième</router-link>
                  <router-link to="/college/cinquieme" class="dropdown-item">Cinquième</router-link>
                  <router-link to="/college/quatrieme" class="dropdown-item">Quatrième</router-link>
                  <router-link to="/college/troisieme" class="dropdown-item">Troisième</router-link>
                </div>
              </div>
            </div>
          </router-link>
          <router-link to="/lycee" class="navbar-item">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <span>Lycée </span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <router-link to="/lycee/seconde" class="dropdown-item">Seconde</router-link>
                  <router-link to="lycee/premiere" class="dropdown-item">Première</router-link>
                  <router-link to="/lycee/terminale" class="dropdown-item">Terminale</router-link>
                </div>
              </div>
            </div>
          </router-link>
          <router-link to="sup" class="navbar-item">Supérieur</router-link>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/" class="button is-light has-text-primary">S'identifier</router-link>
          </div>
        </div>
      </div>

    </nav>

   <nav class="info-nav">
    Le site est en développement, il est probable que $\LaTeX$ ne s'affiche pas correctement. N'hésitez pas à rafraîchir la page !
   </nav>

  <section class="section" style="height: 100%;">
    <router-view/>
  </section>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      mathjax_works: false
    }
  },
  mounted() {
    AOS.init()
  }
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

// Espacements

body {
  font-size: 1em;
  height: 100%;
}

h1 {
  font-size: 100%;
  font-weight: 400;
  text-align: center;
}

.navbar-item {
  color: light;
}

.dropdown {
  background: grey-dark;
}

.info-nav {
  text-align: center;
  background-color: $warning;
  padding: 0.5rem;
}

.title-right {
  text-align: right;
}

@import '../node_modules/bulma';
</style>
