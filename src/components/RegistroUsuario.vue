<template>
  <div>
    <BarraNavegacion />
    <b-container class="mt-5">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <b-card-group deck class="mb-3">
              <b-card
                border-variant="light"
                header="Usuario"
                header-bg-variant="transparent"
              >
                <form class="usuario">
                  <b-card-text>
                    <div class="text-right mx-3 text">
                      <p>
                        Los datos marcados con * son de caracter obligatorio
                      </p>
                    </div>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-account</v-icon>
                      </b-col>
                      <b-col sm="4">
                        <b-form-input
                          name="nombreUser"
                          v-model="nombreUser"
                          placeholder="Nombres*"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          name="apellidoUser"
                          v-model="apellidoUser"
                          :state="null"
                          placeholder="Apellidos*"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="4">
                        <b-form-select
                          v-model="selectedID"
                          :options="optionsID"
                        ></b-form-select>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          name="numIDUser"
                          v-model="numIDUser"
                          placeholder="Número de documento"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="4">
                        <b-form-select
                          v-model="selectedGender"
                          :options="optionsGender"
                        ></b-form-select>
                      </b-col>
                      <b-col sm="6">
                        <b-form-select
                          v-model="selectedState"
                          :options="optionsState"
                        ></b-form-select>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-input-group>
                          <b-form-input
                            id="date-usuario"
                            v-model="value"
                            type="text"
                            placeholder="YYYY-MM-DD"
                            autocomplete="off"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-form-datepicker
                              v-model="value"
                              button-only
                              right
                              locale="es"
                              aria-controls="date-usuario"
                              @context="onContext"
                            ></b-form-datepicker>
                          </b-input-group-append>
                        </b-input-group>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-map-marker</v-icon>
                      </b-col>
                      <b-col sm="4">
                        <b-form-select
                          v-model="selectedCountry"
                          :options="optionsCountry"
                        ></b-form-select>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          name="direccionUser"
                          v-model="direccionUser"
                          placeholder="Dirección"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="4">
                        <b-form-select
                          v-model="selectedCity"
                          :options="optionsCity"
                        ></b-form-select>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          name="barrioUser"
                          v-model="barrioUser"
                          placeholder="Barrio"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-cellphone</v-icon>
                      </b-col>
                      <b-col sm="4">
                        <b-form-input
                          name="celularUser"
                          v-model="celularUser"
                          placeholder="Número de celular*"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          name="correoUser"
                          v-model="correoUser"
                          type="email"
                          placeholder="Correo electronico*"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-lock-outline</v-icon>
                      </b-col>
                      <b-col sm="4">
                        <b-form-input
                          type="password"
                          name="contrasenaUser"
                          aria-describedby="password-help-block"
                          placeholder="Contraseña*"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6">
                        <b-form-input
                          type="password"
                          name="contrasenaConfirmacionUser"
                          aria-describedby="password-help-block"
                          placeholder="Confirmar contraseña*"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"></b-col>
                      <b-col sm="10">
                        <div class="text-left">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="status"
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                          >
                            Acepto el tratamiento de datos
                          </b-form-checkbox>
                        </div>
                      </b-col>
                      <b-col></b-col>
                    </b-row>
                  </b-card-text>
                </form>
              </b-card>
            </b-card-group>
            <b-card-group deck class="mb-3">
              <b-card
                border-variant="light"
                header="Queremos conocer tus preferencias para brindarte una mejor
              experiencia."
                header-bg-variant="transparent"
              >
                <b-card-text>
                  <PreferenciasUsuario />
                </b-card-text>
              </b-card>
            </b-card-group>
            <div class="ubicacionBotones">
              <v-btn color="#41C5D3" dark @click="registrarUsuario"
                >Guardar</v-btn
              >
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BarraNavegacion from "./barraNavegacion/BarraNavegacion";
import PreferenciasUsuario from "./PreferenciasUsuario";
import axios from "axios";
export default {
  name: "crearUsuario",
  components: {
    BarraNavegacion,
    PreferenciasUsuario,
  },
  data() {
    return {
      value: "",
      nombreUser: "",
      apellidoUser: "",
      numIDUser: 0,
      direccionUser: "",
      barrioUser: "",
      celularUser: 0,
      correoUser: "",
      contrasenaUser: "",
      contrasenaConfirmacionUser: "",
      status: "not_accepted",
      selectedCountry: null,
      optionsCountry: [
        { value: null, text: "País*" },
        { value: "Colombia", text: "Colombia" },
      ],
      selectedCity: null,
      optionsCity: [
        { value: null, text: "Ciudad*" },
        { value: "Barranquilla", text: "Barranquilla" },
        { value: "Medellín", text: "Medellín" },
        { value: "Bogotá", text: "Bogotá" },
      ],
      selectedGender: null,
      optionsGender: [
        { text: "Género", value: null },
        { text: "Femenino", value: "1" },
        { text: "Masculino", value: "2" },
        { text: "Otro", value: "3" },
      ],
      selectedState: null,
      optionsState: [
        { text: "Estado civil", value: null },
        { text: "Soltero/a", value: "1" },
        { text: "Casado/a", value: "2" },
        { text: "Unión libre", value: "3" },
        { text: "Separado/a", value: "4" },
        { text: "Divorsiado/a", value: "5" },
        { text: "Viudo/a", value: "6" },
      ],
      selectedID: null,
      optionsID: [
        { text: "Tipo de documento", value: null },
        { text: "Cédula", value: "1" },
        { text: "Tarjeta de identidad", value: "2" },
      ],
    };
  },
  methods: {
    onContext(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.selected = ctx.selectedYMD;
    },
    registrarUsuario() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          nombre: this.nombreUser,
          apellido: this.apellidoUser,
          tipoid: this.selectedID,
          id: this.numIDUser,
          genero: this.selectedGender,
          estado: this.selectedState,
          nacimiento: this.value,
          pais: this.selectedCountry,
          ciudad: this.selectedCity,
          barrio: this.barrioUser,
          direccion: this.direccionUser,
          celular: this.celularUser,
          correo: this.correoUser,
          contrasena: this.contrasenaUser,
          privacidad: this.status,
          preferencias: this.selected,
        })
        .then((response) => {
          this.$router.push("/InicioSesion");
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.usuario {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.text {
  color: #41c5d3;
  font-size: 12px;
}
</style>