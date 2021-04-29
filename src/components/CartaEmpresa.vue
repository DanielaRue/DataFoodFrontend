<template>
  <div>
    <BarraNavegacion />
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="mt-3">
            <router-link to="/RegistroEmpresa"
              ><v-btn class="ma-2" block color="#FF4B4B" elevation="2" plain>
                Registro
              </v-btn></router-link
            >
            <v-btn class="ma-2" disabled block color="#FF4B4B" elevation="2" plain>
              Carta
            </v-btn>
            <router-link to="/Roles">
              <v-btn class="ma-2" block color="#FF4B4B" elevation="2" plain>
                Vincular Cuentas
              </v-btn></router-link
            >
          </div>
        </b-col>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <h6>
              Conocer tus servicios ayudará a que nuestros usuarios tengan la
              mejor experiencia.
            </h6>
            <DesplegableMenu :es-editable="true" />
            <div class="ubicacionBotones mt-4">
              <v-btn color="#41C5D3" dark @click="guardarCartaEmpresa">Guardar</v-btn>
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BarraNavegacion from './barraNavegacion/BarraNavegacion'
import DesplegableMenu from './DesplegableMenu'
export default {
  components:{
    BarraNavegacion,
    DesplegableMenu
  },
  data() {
    return {
      
    };
  },
  methods:{
    guardarCartaEmpresa(){
      this.$router.push("/Roles")
    }
  }
};
</script>
<style>
.ubicacionBotones {
  text-align: right;
  margin-right: 9px;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: contents;
}
</style>