<template>
  <b-container>
    <BarraNavegacion />
    <b-row>
      <b-col>
        <v-card elevation="2">
          <a
            href="https://plotly.com/~Lugares/3/?share_key=odCJwBfWwnLtkEsNRc7aHd"
            target="_blank"
            title="Plot 3"
            style="text-align: center"
            ><img
              src="https://plotly.com/~Lugares/3.png?share_key=odCJwBfWwnLtkEsNRc7aHd"
              alt="Plot 3"
              style="max-width: 100%; width: 600"
              width="600"
              onerror="this.onerror=null;this.src='https://plotly.com/404.png';"
          /></a>
        </v-card>
      </b-col>
      <b-col>
        <v-card elevation="2">
        <a
          href="https://plotly.com/~Lugares/1/?share_key=4woaR8a2alss7aBZvajrzb"
          target="_blank"
          title="Plot 1"
          style="display: block; text-align: center"
          ><img
            src="https://plotly.com/~Lugares/1.png?share_key=4woaR8a2alss7aBZvajrzb"
            alt="Plot 1"
            style="max-width: 100%; width: 600px"
            width="600"
            onerror="this.onerror=null;this.src='https://plotly.com/404.png';"
        /></a>
        </v-card>
      </b-col>
    </b-row>
  </b-container>
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