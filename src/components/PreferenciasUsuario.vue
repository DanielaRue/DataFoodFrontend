<template>
  <div>
        <b-col cols="8">
          <div>
              <div class="mt-4 ubicacionFormulario">
                <b-form-group label-for="tags-component-select">
                  <b-form-tags
                    id="tags-component-select"
                    v-model="value"
                    size="lg"
                    class="mb-2"
                    add-on-change
                    no-outer-focus
                  >
                    <template
                      v-slot="{
                        tags,
                        inputAttrs,
                        inputHandlers,
                        disabled,
                        removeTag,
                      }"
                    >
                      <ul
                        v-if="tags.length > 0"
                        class="list-inline d-inline-block mb-2"
                      >
                        <li
                          v-for="tag in tags"
                          :key="tag"
                          class="list-inline-item"
                        >
                          <b-form-tag
                            @remove="removeTag(tag)"
                            :title="tag"
                            :disabled="disabled"
                            variant="danger"
                            >{{ tag }}</b-form-tag
                          >
                        </li>
                      </ul>
                      <b-form-select
                        v-bind="inputAttrs"
                        v-on="inputHandlers"
                        :disabled="disabled || availableOptions.length === 0"
                        :options="availableOptions"
                      >
                        <template #first>
                          <option disabled value="">
                            Selecciona tus comidas favoritas...
                          </option>
                        </template>
                      </b-form-select>
                    </template>
                  </b-form-tags>
                </b-form-group>
              </div>
          </div>
        </b-col>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      text: "",
      selected: null,
      options: [
        "Afgano",
        "Africano",
        "Alemán",
        "Americano",
        "Andaluz",
        "Árabe",
        "Argentino",
        "Arrocería",
        "Asador",
        "Asia Central",
        "Asiático",
        "Asturiano",
        "Bar",
        "Barbacoa",
        "Bares de copas",
        "Belga",
        "Brasileño",
        "Cajún y criollo",
        "Campania",
        "Canario",
        "Caribe",
        "Castellano",
        "Centroamérica",
        "Centro-Italiano",
        "Chino",
        "Colombiano",
        "Comida callejera",
        "Comida rápida",
        "Contemporáneo",
        "Coreano",
        "Creativo",
        "Crepería",
        "Cubano",
        "De Autor",
        "De Fusión",
        "De mercado",
        "Del Norte",
        "Deli",
        "Egipcio",
        "Español",
        "Etíope",
        "Europa del Este",
        "Europeo",
        "Filipino",
        "Francés",
        "Fruterías",
        "Fujian",
        "Fusión",
        "Fusión japonesa",
        "Gallego",
        "Gastronómico",
        "Gastropub",
        "Griego",
        "Hawaiano",
        "India",
        "Indio",
        "Inglés",
        "Internacional",
        "Iraní",
        "Italiano",
        "Japonés",
        "Latino",
        "Libanés",
        "Marisco",
        "Marisquería",
        "Marroquí",
        "Mediterráneo",
        "Mexicano",
        "Napolitano",
        "Nativo Americano",
        "Oriente Medio",
        "Parrilla",
        "Peruano",
        "Pizza",
        "Portugués",
        "Portuguesa",
        "Pub",
        "Pub cervecero",
        "Restaurantes de cerveza",
        "Ruso",
        "Saludable",
        "Singapur",
        "Sopas",
        "Sudamericana",
        "Sur de Italia",
        "Suroeste",
        "Sushi",
        "Tailandés",
        "Toscana",
        "Turco",
        "Vasco",
        "Vegetariano",
        "Venezolano",
        "Vietnamita",
        "Vino bar",
        "Xinjiang",
      ],
      value: [],
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
  },
  methods:{
    crearUsuario(){
      this.$router.push("/InicioSesion")

    }
  }
};
</script>
<style>
.usuario {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.ubicacionBotones {
  text-align: right;
  margin-right: 9px;
}
.ubicacionFormulario {
  width: 630px;
}
</style>