<template>
  <div>
    <BarraNavegacion />
    <!-- Se trabaja dentro de esta vista con componentes para hacerla dinamica -->
    <b-container>
      <b-row>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 mt-5 bg-white rounded">
            <div>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=54"
                >
                </b-carousel-slide>
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=58"
                ></b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="https://picsum.photos/1024/480/?image=55"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
              <p class="mt-4"></p>
            </div>

            <v-card outlined class="p-2 my-3">
              Nombre <br />
              Horarios <br />
              Telefonos <br />
              Facturación media
            </v-card>
            <div class="p-2 my-3">
              <h4 class="p-3">Menú</h4>
              <DesplegableMenu :es-editable="false"/>
            </div>
            <div class="p-2 my-3">
              <h4 class="p-3">Fotos de usuarios</h4>
              <b-row>
                <b-col>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="155"
                    max-width="185"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </b-col>
                <b-col>
                  <v-img
                    max-height="155"
                    max-width="185"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </b-col>
                <b-col>
                  <v-img
                    max-height="155"
                    max-width="185"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </b-col>
              </b-row>
            </div>
            <div class="p-2 my-3">
              <h4 class="p-3">Comentarios</h4>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="shadow-sm p-3 mb-5 mt-5 bg-white rounded">
            <p>Categorías</p>
            <v-chip class="mx-2 my-2" dark color="#41C5D3">Ambiente</v-chip>
            <v-chip class="mx-2 my-2" dark color="#41C5D3">Tipo de comida</v-chip>
            <v-chip class="mx-2 my-2" dark color="#41C5D3">Servicios</v-chip>
            <v-chip class="mx-2 my-2" dark color="#41C5D3">Métodos de pago</v-chip>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BarraNavegacion from './barraNavegacion/BarraNavegacion';
import DesplegableMenu from "./DesplegableMenu";
// import axios from "axios";
export default {
  components: {
    BarraNavegacion,
    DesplegableMenu,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    // onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   },
    // getRestaurantes() {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>
<style>
</style>