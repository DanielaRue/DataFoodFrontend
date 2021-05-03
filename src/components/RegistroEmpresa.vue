<template>
  <div>
    <BarraNavegacion />
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="mt-3">
            <v-btn
              class="ma-2"
              disabled
              block
              color="#FF4B4B"
              elevation="2"
              plain
            >
              Registro
            </v-btn>
            <router-link to="/CartaEmpresa"
              ><v-btn class="ma-2" block color="#FF4B4B" elevation="2" plain>
                Carta
              </v-btn></router-link
            >
            <router-link to="/Roles"
              ><v-btn class="ma-2" block color="#FF4B4B" elevation="2" plain>
                Vincular Cuentas
              </v-btn></router-link
            >
          </div>
        </b-col>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <div class="mt-3">
              <b-card-group deck class="mb-3">
                <b-card
                  border-variant="light"
                  header="Representante Legal"
                  header-bg-variant="transparent"
                >
                  <b-card-text>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-account</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="nombreRepLegal"
                          v-model="nombreRepLegal"
                          placeholder="Nombres del representante legal"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="apellidoRepLegal"
                          v-model="apellidoRepLegal"
                          placeholder="Apellidos del representante legal"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="direccionRepLegal"
                          v-model="direccionRepLegal"
                          placeholder="Dirección del representante legal"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
            <div class="mt-3">
              <b-card-group deck class="mb-3">
                <b-card
                  border-variant="light"
                  header="Empresa"
                  header-bg-variant="transparent"
                >
                  <b-card-text>
                    <b-row class="mt-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-store</v-icon>
                      </b-col>
                      <b-col>
                        <v-file-input
                          label="Foto de empresa"
                          v-model="fotoEmpresa"
                          outlined
                          dense
                        ></v-file-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="nitEmpresa"
                          v-model="nitEmpresa"
                          placeholder="Nit de empresa"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="nombreEmpresa"
                          v-model="nombreEmpresa"
                          placeholder="Nombre de empresa"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="direccionEmpresa"
                          v-model="direcccionEmpresa"
                          placeholder="Dirección de empresa"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="5">
                        <b-form-select
                          v-model="selectedPais"
                          :options="optionsPais"
                        ></b-form-select>
                      </b-col>
                      <b-col sm="5">
                        <b-form-select
                          v-model="selected"
                          :options="options"
                        ></b-form-select>
                      </b-col>
                    </b-row>
                    <v-row>
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="barrioEmpresa"
                          v-model="barrioEmpresa"
                          placeholder="Barrio"
                        ></b-form-input>
                      </b-col>
                    </v-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="5">
                        <b-form-input
                          name="telefonoEmpresa"
                          v-model="telefonoEmpresa"
                          placeholder="Telefono fijo"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="5">
                        <b-form-input
                          name="movilEmpresa"
                          v-model="movilEmpresa"
                          placeholder="Telefono celular"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="5">
                        <b-form-timepicker
                          name="aperturaEmpresa"
                          placeholder="Hora de apertura"
                          locale="en"
                        ></b-form-timepicker>
                      </b-col>
                      <b-col sm="5">
                        <b-form-timepicker
                          name="cerradaEmpresa"
                          placeholder="Hora de cerrada"
                          locale="en"
                        ></b-form-timepicker>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="correoEmpresa"
                          v-model="correoEmpresa"
                          type="email"
                          placeholder="Correo electronico de empresa"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2"> </b-col>
                      <b-col sm="5">
                        <b-form-input
                          type="password"
                          name="contresenaEmpresa"
                          v-model="contrasenaEmpresa"
                          aria-describedby="password-help-block"
                          placeholder="Contraseña"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="5">
                        <b-form-input
                          type="password"
                          name="contrasenaConfirmacionEmpresa"
                          v-model="contrasenaConfirmacionEmpresa"
                          aria-describedby="password-help-block"
                          placeholder="Confirmar contraseña"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
            <div class="mt-3">
              <b-card-group deck class="mb-3">
                <b-card
                  border-variant="light"
                  header="Facturación media de clientes - COP"
                  header-bg-variant="transparent"
                >
                  <b-card-text>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-cash-multiple</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-spinbutton
                          name="facturacionEmpresa"
                          v-model="value"
                          :locale="locale"
                          min="0"
                          max="1000"
                          step="0.125"
                          placeholder="--"
                        ></b-form-spinbutton>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-card-group>
              <b-card-group deck class="mb-3">
                <b-card
                  border-variant="light"
                  header="Aforo"
                  header-bg-variant="transparent"
                >
                  <b-card-text>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-account-group</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-spinbutton
                          name="aforoEmpresa"
                          wrap
                          min="1"
                          max="500"
                          placeholder="--"
                        ></b-form-spinbutton>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
            <div class="mt-3">
              <b-card-group deck class="mb-3">
                <b-card
                  border-variant="light"
                  header="Redes sociales"
                  header-bg-variant="transparent"
                >
                  <b-card-text>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-instagram</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="instagramEmpresa"
                          v-model="instagramEmpresa"
                          placeholder="Instagram"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-facebook</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="facebookEmpresa"
                          v-model="facebookEmpresa"
                          placeholder="Facebook"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-3">
                      <b-col sm="2">
                        <v-icon large color="#41C5D3">mdi-twitter</v-icon>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input
                          name="twitterEmpresa"
                          v-model="twitterEmpresa"
                          placeholder="Twitter"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
            <div class="ubicacionBotones">
              <v-btn color="#41C5D3" dark @click="registrarEmpresa"
                >Continuar</v-btn
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
import axios from "axios";
import BarraNavegacion from "./barraNavegacion/BarraNavegacion";
export default {
  components: {
    BarraNavegacion,
  },
  data() {
    return {
      nombreRepLegal: "",
      apellidoRepLegal: "",
      direccionRepLegal: "",
      fotoEmpresa: "",
      nombreEmpresa:"",
      nitEmpresa: null,
      direccionEmpresa: "",
      barrioEmpresa: "",
      telefonoEmpresa: null,
      movilEmpresa: null,
      aperturaEmpresa: null,
      cerradaEmpresa: null,
      correoEmpresa: "",
      contrasenaEmpresa: "",
      contrasenaConfirmacionEmpresa: "",
      facturacionEmpresa: null,
      aforoEmpresa: null,
      instagramEmpresa: "",
      facebookEmpresa: "",
      twitterEmpresa: "",
      selected: null,
      selectedPais: null,
      options: [
        { value: null, text: "Ciudad" },
        { value: "1", text: "Barranquilla" },
        { value: "2", text: "Medellín" },
        { value: "3", text: "Bogotá" },
      ],
      optionsPais: [
        { value: null, text: "País" },
        { value: "1", text: "Colombia" },
      ],
    };
  },
  methods: {
    registrarEmpresa() {
      axios
        .post("http://localhost:8080/api/empresa/registrar", {
          // nombreRepLegal: this.nombreRepLegal,
          // apellidoRepLegal: this.apellidoRepLegal,
          // direccionRepLegal: this.direccionRepLegal,
          // fotoEmpresa: this.fotoEmpresa,
          nombre_empresa: this.nombreEmpresa,
          nit: this.nitEmpresa,
          // direccionEmpresa: this.direccionEmpresa,
          // barrioEmpresa: this.barrioEmpresa,
          telefono: this.telefonoEmpresa,
          // movilEmpresa: this.movilEmpresa,
          // aperturaEmpresa: this.aperturaEmpresa,
          // cerradaEmpresa: this.cerradaEmpresa,
          correo_electronico: this.correoEmpresa,
          pws: this.contrasenaEmpresa,
          // contrasenaConfirmacionEmpresa: this.contrasenaConfirmacionEmpresa,
          // facturacionEmpresa: this.facturacionEmpresa,
          // aforoEmpresa: this.aforoEmpresa,
          // instagramEmpresa: this.instagramEmpresa,
          // facebookEmpresa: this.facebookEmpresa,
          // twitterEmpresa: this.twitterEmpresa,
          // selected: this.selected,
          // selectedPais: this.selectedPais,
        })
        .then((response) => {
          this.$router.push("/ServiciosEmpresa");
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
.ubicacionBotones {
  text-align: right;
  margin-right: 9px;
}
</style>