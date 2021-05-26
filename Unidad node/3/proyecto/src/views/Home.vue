<template>
  <div>
    <h1>Personas</h1>
    <Table :items="personas" :fields="fields" />
  </div>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      fields: [
        {key: 'id', label: 'Clave' },
        {key: 'nombre' },
        {key: 'direccion', label: 'Dirección', formatter: value =>{
          return value || "-"
        }},
        { key: "telefono", label: "Teléfono", formatter: value =>{
          return value || "-"
        }},
      ],
    };
  },
  computed: {
    ...mapState(["personas"]),
  },
  methods: {
    ...mapActions(["setPersonas"]),
  },
  created() {
    this.setPersonas();
  }
};
</script>
