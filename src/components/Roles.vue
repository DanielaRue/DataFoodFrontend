<template>
  <div>
    <BarraNavegacion />
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="mt-3">
            <router-link to="/RegistroEmpresa"
              ><v-btn class="ma-2" block outlined color="#FF4B4B">
                Registro
              </v-btn></router-link
            >
            <router-link to="/CartaEmpresa"
              ><v-btn class="ma-2" block outlined color="#FF4B4B">
                Carta
              </v-btn></router-link
            >
            <router-link to="/Roles"
              ><v-btn class="ma-2" disabled block outlined color="#FF4B4B">
                Vincular Cuentas
              </v-btn></router-link
            >
          </div>
        </b-col>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <h6>Vincula las cuentas de tus trabajadores.</h6>
            <b-row class="my-3">
              <b-col sm="6">
                <b-form-input
                  name="emailRole"
                  v-model="newRole"
                  type="email"
                  placeholder="Correo electronico del usuario"
                ></b-form-input> </b-col
              ><b-col sm="4">
                <b-form-select
                  name="opRole"
                  v-model="selectedRole"
                  :options="optionsRole"
                ></b-form-select>
              </b-col>
              <b-col sm="2">
                <v-btn icon color="#41C5D3" elevation="2" dark @click="addRole"
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
              </b-col>
            </b-row>
            <div class="mt-5">
              <b-table striped hover :items="roles" :fields="fields"></b-table>
            </div>
          </div>
          <div class="ubicacionBotones mt-4">
            <v-btn color="#41C5D3" dark @click="guardarRolesEmpresa"
              >Guardar</v-btn
            >
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
  components: {
    BarraNavegacion,
  },
  data() {
    return {
      newRole: "",
      fields: [
        { key: "emailRole", label: "Correo vinculado" },
        { key: "opRole", label: "Rol asociado" },
      ],
      roles: [],
      computed: {},
      selectedRole: null,
      optionsRole: [
        { value: null, text: "Rol" },
        { value: "Administrador", text: "Administrador" },
        { value: "Mesero", text: "Mesero" },
      ],
    };
  },
  mounted() {},
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
  },
  methods: {
    addRole() {
      if (!this.newRole) {
        return;
      }
      const newRole = { emailRole: this.newRole, opRole: this.selectedRole };
      this.roles.push(newRole);
      this.newRole = "";
      (this.selectedRole = null), this.saveRoles();
    },
    removeRole(x) {
      this.roles.splice(x, 1);
      this.saveRoles();
    },
    saveRoles() {
      const parsed = JSON.stringify(this.roles);
      localStorage.setItem("roles", parsed);
    },
    guardarRolesEmpresa() {
      this.$router.push("/InicioSesion");
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