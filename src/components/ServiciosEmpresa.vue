<template>
  <div>
    <BarraNavegacion />
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="mt-3">
            <v-btn class="ma-2" disabled block outlined color="#FF4B4B">
              Registro
            </v-btn>
            <router-link to="/CartaEmpresa"
              ><v-btn class="ma-2" block outlined color="#FF4B4B">
                Carta
              </v-btn></router-link
            >
            <router-link to="/Roles"
              ><v-btn class="ma-2" block outlined color="#FF4B4B">
                Vincular Cuentas
              </v-btn></router-link
            >
            <v-btn class="ma-2" block outlined color="#FF4B4B">
              Estadisticas
            </v-btn>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <h6>
              Conocer tus servicios ayudará a que nuestros usuarios tengan la
              mejor experiencia.
            </h6>
            <div class="mt-4">
              <b-form-group>
                <b-form-tags
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
                          Tipo de establecimiento
                        </option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>

              <b-form-group>
                <b-form-tags
                  v-model="valueTipoComida"
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
                      :disabled="
                        disabled || availableOptionsTipoComida.length === 0
                      "
                      :options="availableOptionsTipoComida"
                    >
                      <template>
                        <option disabled value="">Tipo de comida</option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>

              <b-form-group>
                <b-form-tags
                  v-model="valueTipoCocina"
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
                      :disabled="
                        disabled || availableOptionsTipoCocina.length === 0
                      "
                      :options="availableOptionsTipoCocina"
                    >
                      <template>
                        <option disabled value="">Tipo de cocina</option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>
              <b-form-group>
                <b-form-tags
                  v-model="valueDietasEspeciales"
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
                      :disabled="
                        disabled ||
                        availableOptionsDietasEspeciales.length === 0
                      "
                      :options="availableOptionsDietasEspeciales"
                    >
                      <template>
                        <option disabled value="">
                          Opciones de dietas especiales
                        </option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>
              <b-form-group>
                <b-form-tags
                  v-model="valueIdealPara"
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
                      :disabled="
                        disabled || availableOptionsIdealPara.length === 0
                      "
                      :options="availableOptionsIdealPara"
                    >
                      <template>
                        <option disabled value="">Ideal para</option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>
              <b-form-group>
                <b-form-tags
                  v-model="valueServicios"
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
                      :disabled="
                        disabled || availableOptionsServicios.length === 0
                      "
                      :options="availableOptionsServicios"
                    >
                      <template>
                        <option disabled value="">Servicios</option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>
              <b-form-group>
                <b-form-tags
                  v-model="valuePagos"
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
                      :disabled="disabled || availableOptionsPagos.length === 0"
                      :options="availableOptionsPagos"
                    >
                      <template>
                        <option disabled value="">
                          Metodos de pago aceptados
                        </option>
                      </template>
                    </b-form-select>
                  </template>
                </b-form-tags>
              </b-form-group>
            </div>
            <div class="ubicacionBotones">
              <v-btn color="#41C5D3" dark>Guardar</v-btn>
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BarraNavegacion from './barraNavegacion/BarraNavegacion'
export default {
  components:{
    BarraNavegacion
  },
  data() {
    return {
      value: [],
      selected: null,
      options: [
        "Restaurantes",
        "Bocados rápidos",
        "Postres",
        "Café y Té",
        "Panaderías",
        "Bares y pubs",
        "Mercado de alimentos especiales",
      ],
      valueTipoComida: [],
      optionsTipoComida: ["Desayuno", "Brunch", "Comida", "Cena"],
      valueTipoCocina: [],
      optionsTipoCocina: [
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
      valueDietasEspeciales: [],
      optionsDietasEspeciales: [
        "Halal",
        "Kosher",
        "Vegetariana",
        "Libre de gluten",
        "Vegana",
      ],
      valueIdealPara: [],
      optionsIdealPara: [
        "Afterwork",
        "Bistró",
        "Buffet libre",
        "Centro comercial",
        "Amigos",
        "Con vistas",
        "Negocios",
        "Eventos de empresa",
        "Familia",
        "Ocaciones Especiales",
        "Niños",
        "Ver deportes",
        "Romántico",
        "Terraza",
        "Vida nocturna",
        "Vinoteca",
      ],
      valueServicios: [],
      optionsServicios: [
        "Accesible para sillas de ruedas",
        "Pet Friendly",
        "Wifi gratuito",
        "Asientos al aire libre",
        "Comedor privado",
        "Con espectáculo",
        "Con piscina",
        "Disponible 24 Hrs",
        "Entrega",
        "Hermosa bodega",
        "Karaoke",
        "Medidas de seguridad COVID",
        "Música en vivo",
        "Parqueadero disponible",
        "Pista de baile",
        "Privatizable",
        "Reservas",
        "Restaurantes con zonas para fumadores",
        "Se aceptan tarjetas de crédito",
        "Servicio de mesa",
        "Televisión",
        "Sirve alcohol",
      ],
      valuePagos: [],
      optionsPagos: [
        "Efectivo",
        "Tarjeta Debito",
        "Tarjeta Credito Visa",
        "Tarjeta Credito Master",
        "PSE",
        "Trasferencia",
      ],
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
    availableOptionsTipoComida() {
      return this.optionsTipoComida.filter(
        (opt) => this.valueTipoComida.indexOf(opt) === -1
      );
    },
    availableOptionsTipoCocina() {
      return this.optionsTipoCocina.filter(
        (opt) => this.valueTipoCocina.indexOf(opt) === -1
      );
    },
    availableOptionsDietasEspeciales() {
      return this.optionsDietasEspeciales.filter(
        (opt) => this.valueDietasEspeciales.indexOf(opt) === -1
      );
    },
    availableOptionsIdealPara() {
      return this.optionsIdealPara.filter(
        (opt) => this.valueIdealPara.indexOf(opt) === -1
      );
    },
    availableOptionsServicios() {
      return this.optionsServicios.filter(
        (opt) => this.valueServicios.indexOf(opt) === -1
      );
    },
    availableOptionsPagos() {
      return this.optionsPagos.filter(
        (opt) => this.valuePagos.indexOf(opt) === -1
      );
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