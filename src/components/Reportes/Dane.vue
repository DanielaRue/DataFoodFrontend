<template>
  <div>
    <BarraNavegacion />
    <iframe width="1350" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiYzI1OGI2NTctMzdjYy00ZDIwLWEwNWUtNWEwY2E5MDNhNTFhIiwidCI6ImFlNmNhODZjLWU1NTktNDUxNi04ZTM2LWY4OTk2ZjQ1MjliMCIsImMiOjR9&embedImagePlaceholder=true&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
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
};
</script>
<style scoped>
</style>