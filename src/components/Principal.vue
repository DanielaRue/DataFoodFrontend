<template>
  <div>
    <BarraNavegacion />
    <b-container fluid="md" class="mt-1 principal">
      <b-row>
        <b-col class="linea p-1">
          <div>
            <v-card elevation="1" width="246" height="100vh">
              <v-navigation-drawer floating permanent>
                <v-list dense rounded class="mt-12">
                  <v-list-item
                    v-for="item in itemsFiltros"
                    :key="item.title"
                    link
                  >
                    <v-list-item-icon>
                      <v-icon small color="#F95A37">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.title }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="mx-12 mt-12">
            <ul class="list-unstyled">
              <b-media tag="li" v-for="(item, i) in listaRestaurantes" :key="i">
                <template #aside>
                  <b-img
                    blank
                    blank-color="#abc"
                    width="150"
                    alt="placeholder"
                    class="mt-3"
                  ></b-img>
                </template>
                <h5 class="mt-3 mb-1">Nombre {{ item.nombre }}</h5>
                <p class="mb-0">
                  <br />
                  <b-row>
                    <b-col sm="1">
                      <v-icon small color="#FF4B4B"
                        >mdi-map-marker-multiple</v-icon
                      >
                    </b-col>
                    <b-col sm="8"> Dirección {{ item.direccion }} </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="1">
                      <v-icon small color="#FF4B4B">mdi-phone-classic</v-icon>
                    </b-col>
                    <b-col sm="8"> Telefono {{ item.telefono }}</b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="1">
                      <v-icon small color="#FF4B4B">mdi-cash-multiple</v-icon>
                    </b-col>
                    <b-col sm="8">
                      Precio promedio {{ item.facturacionmedia }}</b-col
                    >
                  </b-row>
                  <b-row>
                    <b-col sm="1">
                      <v-icon small color="#FF4B4B"
                        >mdi-clock-time-three-outline</v-icon
                      >
                    </b-col>
                    <b-col sm="8"> Horarios {{ item.horarios }}</b-col>
                  </b-row>
                </p>
                <v-btn
                  class="ubicacionBotones"
                  elevation="2"
                  x-small
                  dark
                  color="#FF4B4B"
                  @click="verMas"
                  >VER MÁS</v-btn
                >
                <v-divider></v-divider>
              </b-media>
              
            </ul>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BarraNavegacion from "./barraNavegacion/BarraNavegacion";
export default {
  name: "Principal",
  components: {
    BarraNavegacion,
  },
  data() {
    return {
      listaRestaurantes: [
        {

        }
      ],
      itemsFiltros: [
        { title: "Zona", icon: "mdi-view-dashboard" },
        { title: "Tipo de establecimiento", icon: "mdi-silverware-fork-knife" },
        { title: "Tipo de comida", icon: "mdi-silverware-fork-knife" },
        { title: "Tipo de cocina", icon: "mdi-silverware-fork-knife" },
        { title: "Dietas especiales", icon: "mdi-silverware-fork-knife" },
        { title: "Ideal para", icon: "mdi-silverware-fork-knife" },
        { title: "Servicios", icon: "mdi-silverware-fork-knife" },
        { title: "Métodos de pago", icon: "mdi-account-cash" },
      ],
      selectedLocation: null,
      optionsLocation: [
        { value: null, text: "--" },
        { value: "1", text: "Norte" },
        { value: "2", text: "Sur" },
        { value: "3", text: "Oriente" },
        { value: "4", text: "Occidente" },
        { value: "5", text: "NorOriente" },
        { value: "6", text: "NorOccidente" },
        { value: "7", text: "SurOriente" },
        { value: "8", text: "SurOccidente" },
      ],

      selectedFood: null,
      optionsFood: [
        { value: null, text: "--" },
        { value: "1", text: "Desayuno" },
        { value: "2", text: "Brunch" },
        { value: "3", text: "Comida" },
        { value: "4", text: "Cena" },
      ],
      selectedPlan: [],
      optionsPlan: [
        { text: "Negocios", value: "1" },
        { text: "Familiar", value: "2" },
        { text: "Romantico", value: "3" },
        { text: "Celebración", value: "4" },
      ],
      selectedDiet: [],
      optionsDiet: [
        { text: "Halal", value: "1" },
        { text: "Vegana", value: "2" },
        { text: "Vegetariana", value: "3" },
        { text: "Libre de gluten", value: "4" },
        { text: "Kosher", value: "5" },
      ],
      selectedService: [],
      optionsService: [
        { text: "Parqueadero", value: "1" },
        { text: "Pet Friendly", value: "2" },
        { text: "Kit Friendly", value: "3" },
        { text: "Aire acondicionado", value: "4" },
      ],
    };
  },
  mounted() {
    
  },
  methods:{
    verMas(){
      this.$router.push("/Restaurante")
    }
  }
};
</script>

<style scoped>
/* .h3 {
  margin-top: 35px;
  margin-left: 30px;
  text-align: left;
} */
.ubicacionBotones {
  text-align: right;
  margin-left: 450px;
}
.v-navigation-drawer__content {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.principal {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: left; */
}
sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 0px;
}
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
