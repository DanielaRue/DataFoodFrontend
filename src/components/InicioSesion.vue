<template>
  <b-container class="container mx-auto">
    <b-row>
      <b-col></b-col>
      <b-col cols="5">
        <v-card class="pa-5 mx-auto" min-width="400">
          <form @submit.prevent="submit">
            <div class="my-4">
              <b-button block variant="outline-secondary"
                >Inicia sesión con Google</b-button
              >
              <b-button block variant="outline-secondary"
                >Inicia sesión con Facebook</b-button
              >
            </div>
            <div class="linea mt-4">
              <b-row class="mt-4">
                <b-col sm="2">
                  <v-icon slot="prepend" color="#FF4B4B">mdi-mail</v-icon>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    v-model="emailLogin"
                    type="email"
                    placeholder="Correo"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col sm="2">
                  <v-icon slot="prepend" color="#FF4B4B">mdi-key</v-icon>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    type="password"
                    v-model="passwordLogin"
                    aria-describedby="password-help-block"
                    placeholder="Contraseña"
                  ></b-form-input>
                  <div class="mt-2 text-right">
                    <router-link to=""
                      ><b-link>Olvidé mi contraseña</b-link></router-link
                    >
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="mt-2">
              <v-btn class="mr-4" color="#FF4B4B" elevation="2" block dark @click="loginUser">
                Iniciar Sesión
              </v-btn>
            </div>
            <div class="mt-2 text-center">
              <router-link to="/LinksRegistros"><p>Registrarme</p></router-link>
            </div>
          </form>
        </v-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
    };
  },
  methods: {
    loginUser() {
      let json = {
        email: this.emailLogin,
        password: this.passwordLogin,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", json)
        .then((response) => {
          const token = response.statusText
          localStorage.setItem("jwt", token)
          console.log(response);
          this.$router.push('./Principal');
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
a:hover {
  color: #dc3545;
  text-decoration: underline;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>