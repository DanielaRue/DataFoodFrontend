<template>
  <v-expansion-panels class="mt-10">
    <v-expansion-panel>
      <v-expansion-panel-header> Entradas </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="entradas"
          :fields="fields"
          responsive
          small
        ></b-table>

        <div class="botonAnadir">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-1
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-1" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  name="nombre"
                  v-model="nombrePlato"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  name="precio"
                  v-model="precioPlato"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  id="textarea-small"
                  v-model="descripcionPlato"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addPlate"
                >Agregar</v-btn
              >
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header> Platos fuertes </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="fuertes"
          :fields="fieldsFuerte"
          responsive
          small
        ></b-table>
        <div class="ubicacionBotones">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-2
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-2" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  v-model="nombrePlatoFuerte"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  v-model="precioPlatoFuerte"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  v-model="descripcionPlatoFuerte"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addPlatoFuertes"
                >Agregar</v-btn
              >
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header> Ensaladas </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="ensaladas"
          :fields="fieldsEnsalada"
          responsive
          small
        ></b-table>
        <div class="ubicacionBotones">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-3
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-3" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  v-model="nombrePlatoEnsalada"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  v-model="precioPlatoEnsalada"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  v-model="descripcionPlatoEnsalada"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addPlatoEnsalada"
                >Agregar</v-btn
              >
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header> Postres </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="postres"
          :fields="fieldsPostre"
          responsive
          small
        ></b-table>
        <div class="ubicacionBotones">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-4
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-4" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  v-model="nombrePlatoPostre"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  v-model="precioPlatoPostre"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  v-model="descripcionPlatoPostre"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addPlatoPostre"
                >Agregar</v-btn
              >
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header> Bebidas </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="bebidas"
          :fields="fieldsBebida"
          responsive
          small
        ></b-table>
        <div class="ubicacionBotones">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-5
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-5" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  v-model="nombreBebida"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  v-model="precioBebida"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  v-model="descripcionBebida"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addBebida"
                >Agregar</v-btn
              >
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header> Otros </v-expansion-panel-header>
      <v-expansion-panel-content>
        <b-table
          striped
          hover
          :items="otros"
          :fields="fieldsOtro"
          responsive
          small
        ></b-table>
        <div class="ubicacionBotones">
          <v-btn
            v-if="esEditable"
            v-b-modal.modal-6
            small
            icon
            color="#41C5D3"
            elevation="2"
            dark
            @click="addRole"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <b-modal id="modal-6" hide-footer title="Agregue un nuevo plato">
            <b-row class="my-3">
              <b-col sm="8">
                <b-form-input
                  v-model="nombreOtro"
                  placeholder="Nombre del plato"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  v-model="precioOtro"
                  placeholder="Precio COP"
                  size="sm"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-3">
              <b-col sm=""> </b-col>
              <b-col sm="12">
                <b-form-textarea
                  v-model="descripcionOtro"
                  size="sm"
                  placeholder="Descripción del plato"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-col sm="12" class="ubicacionBotones">
              <v-btn color="#41C5D3" block dark @click="addOtro">Agregar</v-btn>
            </b-col>
          </b-modal>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  data() {
    return {
      fuertes: [],
      entradas: [],
      ensaladas: [],
      postres: [],
      bebidas: [],
      otros: [],
      precioPlato: "",
      nombrePlato: "",
      descripcionPlato: "",
      precioPlatoFuerte: "",
      nombrePlatoFuerte: "",
      descripcionPlatoFuerte: "",
      precioPlatoEnsalada: "",
      nombrePlatoEnsalada: "",
      descripcionPlatoEnsalada: "",
      precioPlatoPostre: "",
      nombrePlatoPostre: "",
      descripcionPlatoPostre: "",
      precioBebida: "",
      nombreBebida: "",
      descripcionBebida: "",
      precioOtro: "",
      nombreOtro: "",
      descripcionOtro: "",
      fields: [
        { key: "nombrePlato", label: "Plato" },
        { key: "descripcionPlato", label: "Descripción" },
        { key: "precioPlato", label: "Precio" },
      ],
      fieldsFuerte: [
        { key: "nombrePlatoFuerte", label: "Plato" },
        { key: "descripcionPlatoFuerte", label: "Descripción" },
        { key: "precioPlatoFuerte", label: "Precio" },
      ],
      fieldsEnsalada: [
        { key: "nombrePlatoEnsalada", label: "Plato" },
        { key: "descripcionPlatoEnsalada", label: "Descripción" },
        { key: "precioPlatoEnsalada", label: "Precio" },
      ],
      fieldsPostre: [
        { key: "nombrePlatoPostre", label: "Plato" },
        { key: "descripcionPlatoPostre", label: "Descripción" },
        { key: "precioPlatoPostre", label: "Precio" },
      ],
      fieldsBebida: [
        { key: "nombreBebida", label: "Plato" },
        { key: "descripcionBebida", label: "Descripción" },
        { key: "precioBebida", label: "Precio" },
      ],
      fieldsOtro: [
        { key: "nombreOtro", label: "Plato" },
        { key: "descripcionOtro", label: "Descripción" },
        { key: "precioOtro", label: "Precio" },
      ],
    };
  },
  props: {
    esEditable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
  },
  methods: {
    addPlate() {
      if (!this.nombrePlato) {
        return;
      }
      const nombrePlato = {
        nombrePlato: this.nombrePlato,
        descripcionPlato: this.descripcionPlato,
        precioPlato: this.precioPlato,
      };
      this.entradas.push(nombrePlato);
      this.nombrePlato = "";
      this.precioPlato = "";
      (this.descripcionPlato = ""), this.saveEntradas();
    },
    saveEntradas() {
      const parsed = JSON.stringify(this.entradas);
      localStorage.setItem("entradas", parsed);
    },
    addPlatoFuertes() {
      if (!this.nombrePlatoFuerte) {
        return;
      }
      const nombrePlatoFuerte = {
        nombrePlatoFuerte: this.nombrePlatoFuerte,
        descripcionPlatoFuerte: this.descripcionPlatoFuerte,
        precioPlatoFuerte: this.precioPlatoFuerte,
      };
      this.fuertes.push(nombrePlatoFuerte);
      this.nombrePlatoFuerte = "";
      this.precioPlatoFuerte = "";
      (this.descripcionPlatoFuerte = ""), this.saveFuertes();
    },
    saveFuertes() {
      const parsed = JSON.stringify(this.fuertes);
      localStorage.setItem("fuertes", parsed);
    },
    addPlatoEnsalada() {
      if (!this.nombrePlatoEnsalada) {
        return;
      }
      const nombrePlatoEnsalada = {
        nombrePlatoEnsalada: this.nombrePlatoEnsalada,
        descripcionPlatoEnsalada: this.descripcionPlatoEnsalada,
        precioPlatoEnsalada: this.precioPlatoEnsalada,
      };
      this.ensaladas.push(nombrePlatoEnsalada);
      this.nombrePlatoEnsalada = "";
      this.precioPlatoEnsalada = "";
      (this.descripcionPlatoEnsalada = ""), this.saveEnsalada();
    },
    saveEnsalada() {
      const parsed = JSON.stringify(this.ensaladas);
      localStorage.setItem("ensaladas", parsed);
    },
    addPlatoPostre() {
      if (!this.nombrePlatoPostre) {
        return;
      }
      const nombrePlatoPostre = {
        nombrePlatoPostre: this.nombrePlatoPostre,
        descripcionPlatoPostre: this.descripcionPlatoPostre,
        precioPlatoPostre: this.precioPlatoPostre,
      };
      this.postres.push(nombrePlatoPostre);
      this.nombrePlatoPostre = "";
      this.precioPlatoPostre = "";
      (this.descripcionPlatoPostre = ""), this.savePostre();
    },
    savePostre() {
      const parsed = JSON.stringify(this.postres);
      localStorage.setItem("postres", parsed);
    },
    addBebida() {
      if (!this.nombreBebida) {
        return;
      }
      const nombreBebida = {
        nombreBebida: this.nombreBebida,
        descripcionBebida: this.descripcionBebida,
        precioBebida: this.precioBebida,
      };
      this.bebidas.push(nombreBebida);
      this.nombreBebida = "";
      this.precioBebida = "";
      (this.descripcionBebida = ""), this.saveBebida();
    },
    saveBebida() {
      const parsed = JSON.stringify(this.bebidas);
      localStorage.setItem("bebidas", parsed);
    },
    addOtro() {
      if (!this.nombreOtro) {
        return;
      }
      const nombreOtro = {
        nombreOtro: this.nombreOtro,
        descripcionOtro: this.descripcionOtro,
        precioOtro: this.precioOtro,
      };
      this.otros.push(nombreOtro);
      this.nombreOtro = "";
      this.precioOtro = "";
      (this.descripcionOtro = ""), this.saveOtro();
    },
    saveOtro() {
      const parsed = JSON.stringify(this.otros);
      localStorage.setItem("otros", parsed);
    },
  },
};
</script>
<style>
.ubicacionBotones {
  text-align: right;
  margin-right: 9px;
}
.botonAnadir {
  text-align: right;
  margin-left: 590px;
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