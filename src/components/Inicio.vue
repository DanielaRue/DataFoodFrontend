<template>
  <div
    class="container"
    
    :style="cssProps"
  >
    <BarraNavegacion />
    <v-card class="pa-5 mx-auto" min-width="600">
      <form>
        <v-text-field
          v-model="Restaurante"
          label="Restaurante o Comida"
          color="black"
          outlined
          dense
        >
          <v-icon slot="prepend" color="#FF4B4B">mdi-store</v-icon>
        </v-text-field>
        <v-text-field
          v-model="Ubicacion"
          label="Ubicación"
          color="black"
          outlined
          dense
        >
          <v-icon slot="prepend" color="#FF4B4B">mdi-map-marker</v-icon>
        </v-text-field>
        <router-link to="/Principal">
          <v-btn class="mr-4" color="#FF4B4B" elevation="2" block dark>
            Buscar
          </v-btn>
        </router-link>
      </form>
    </v-card>
  </div>
</template>
<script>
import BarraNavegacion from "./barraNavegacion/BarraNavegacion";
export default {
  components: {
    BarraNavegacion,
  },
  data() {
    return {
      cssProps:{
        backgroundImage: `url(${require('@/assets/fondo.jpeg')})`
      }
    };
  },
  methods: {
    // submit() {
    //   this.$v.$touch();
    // },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-position: center;
  background-size: 150%;
}
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1350px;
}
</style>