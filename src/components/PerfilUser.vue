<template>
  <div>
    <BarraNavegacion />
    <b-container class="text-center">
        <b-row>
            <b-col>
                <v-card elevation="2">En perfil</v-card>
            </b-col>
        </b-row>
    </b-container>
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
  methods: {},
};
</script>
<style scoped>
</style>