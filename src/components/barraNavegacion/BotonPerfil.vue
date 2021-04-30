<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn target="_blank" text v-bind="attrs" v-on="on">
          <span class="mr-2">Mi Perfil</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/Perfil">
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Estadisticas">
          <v-list-item-title>Estadísticas</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="cerrarSesion">
          <v-list-item-title>Cerrar Sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    cerrarSesion() {
      this.$router.push('./')
      return localStorage.removeItem("jwt");
    },
  },
};
</script>
<style>
</style>