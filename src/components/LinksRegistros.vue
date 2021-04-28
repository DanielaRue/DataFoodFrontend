<template>
  <b-container>
    <b-row>
      <b-col>
        <router-link to="/RegistroEmpresa"
          ><v-btn class="mr-4" color="#FF4B4B" elevation="2" block dark>
            Registrarme como empresa
          </v-btn></router-link
        >
      </b-col>
      <b-col>
        <router-link to="/RegistroUsuario"
          ><v-btn class="mr-4" color="#FF4B4B" elevation="2" block dark>
            Registrarme como usuario
          </v-btn></router-link
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
</style>