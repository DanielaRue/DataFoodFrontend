<template>
  <div class="container text-center">
    <BarraNavegacion />
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Google"
            ><v-icon class="mx-5">mdi-google</v-icon>GOOGLE</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            href="https://trends.google.com.co/trends/explore?geo=CO&q=Comidas%20rapidas,Comida%20saludable,Comida%20Tipica,Comida%20Vegetariana,Comida%20sin%20Gluten"
            ><v-icon class="mx-5">mdi-google</v-icon>DATOS EN LA RED</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Facebook"
            ><v-icon class="mx-5">mdi-facebook</v-icon>FACEBOOK</v-btn
          >
        </v-col>

        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Instagram"
            ><v-icon class="mx-5">mdi-instagram</v-icon>INSTAGRAM</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Dane"
            ><v-icon class="mx-5">mdi-chart-donut</v-icon>DANE</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/OtrosActores"
            ><v-icon class="mx-5">mdi-chart-line</v-icon>OTROS ACTORES DEL
            MERCADO</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Lugares"
            ><v-icon class="mx-5">mdi-align-vertical-bottom</v-icon>LUGARES</v-btn
          >
        </v-col>
        <!-- <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Domicilios"
            ><v-icon class="mx-5">mdi-chart-timeline-variant</v-icon>ESTADISTICAS
            DE DOMICILIOS</v-btn
          >
        </v-col> -->
        <v-col cols="6">
          <v-btn
            class="mt-4"
            color="#003458"
            block
            elevation="4"
            plain
            x-large
            to="/Emociones"
            ><v-icon class="mx-5">mdi-chat-processing-outline</v-icon>COMPORTAMIENTOS DE USUARIO</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BarraNavegacion from "@/components/barraNavegacion/BarraNavegacion";
export default {
  components: {
    BarraNavegacion,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>