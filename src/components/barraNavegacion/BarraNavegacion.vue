<template>
  <v-app-bar app color="#FF4B4B" dense dark>
    <router-link to="/">
      <v-btn target="_blank" text>
        <v-icon>mdi-chart-bubble</v-icon>
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <div v-if="!isAuthenticated()">
      <BotonIniciarSesion />
    </div>
    <div v-if="isAuthenticated()">
      <BotonPerfil />
    </div>
  </v-app-bar>
</template>
<script>
 import BotonIniciarSesion from "./BotonIniciarSesion";
import BotonPerfil from "./BotonPerfil";
export default {
  components: {
     BotonIniciarSesion,
    BotonPerfil,
  },
  methods: {
    isAuthenticated() {
      return localStorage.getItem("jwt") !== null;
    },
  },
};
</script>
<style>
</style>