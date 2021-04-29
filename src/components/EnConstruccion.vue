<template>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card class="text-center">
        <v-card-title class="text-center">
          EN DESARROLLO
        </v-card-title>

        <v-card-text>
          Estamos trabajando para brindarte una mejor experiencia.<br/>
          Pronto podrás conocer todos nuestros servicios.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            ACEPTAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- <v-col cols="8" text-center>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="1" outlined tile> </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" elevation="1" outlined tile></v-card>
      </v-col>
    </v-row>
  </v-col> -->
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style>
</style>