<template>
  <div>
    <Maintitle :texto="pelicula.title" />
    <h5>Año</h5>
    <p>{{ pelicula.release_date }}</p>
  </div>
</template>

<script>
import Maintitle from "../components/maintitle";

export default {
  name: "MovieDetail",
  components: {
    Maintitle,
  },
  data() {
    return {
      pelicula: {},
    };
  },
  methods: {
    async detallePelicula() {
      try {
        const res = await fetch(
          `https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`
        );
        const data = await res.json();
        console.log(data);
        this.pelicula = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    // metodos y datos cargados y asi
    this.detallePelicula();
  },
};
</script>

<style>
</style>