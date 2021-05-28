<template>
  <div>
    <h1>Agregar Persona</h1>
    <b-form @submit.prevent="guardarPersona()">
      <Input
        v-model="persona.nombre"
        id="nombre"
        titulo="Nombre"
        placeholder="Ingrese el nombre"
        :maxlength="50"
        :error="erroresValidacion && !validacionNombre"
        mensajeError="Es necesario ingresar el nombre"
        class="mb-2"
      />
      <Input
        v-model="persona.telefono"
        id="telefono"
        titulo="Telefono"
        :maxlength="10"
        placeholder="Ingrese el telefono"
        class="mb-2"
      />
      <Input
        v-model="persona.direccion"
        id="direccion"
        titulo="Dirección"
        :maxlength="150"
        placeholder="Ingrese la dirección"
        :error="erroresValidacion && !validacionDireccion"
        class="mb-2"
      />
      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import Input from "../components/Input";
import { mapActions } from "vuex";

export default {
  name: "Agregar",
  components: {
    Input,
  },
  data() {
    return {
      persona: {
        nombre: "",
        direccion: "",
        telefono: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.persona.nombre !== undefined && this.persona.nombre.trim() !== ""
      );
    },
    validacionDireccion() {
      return (
        this.persona.direccion !== undefined &&
        this.persona.direccion.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["crearPersona"]),
        guardarPersona() {
      if (this.validacionNombre && this.validacionDireccion) {
        this.erroresValidacion = false;
        //Guardar
        this.crearPersona({
          params: this.persona,
          onComplete: (response) => {
            console.log(response.data);
            this.$notify({
              type: 'success', 
              title: response.data.mensaje,
            });
            this.$router.push({
                name: 'Home'
            })
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: 'error', 
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    }
  },
};
</script>

<style>
</style>