<template>
  <div class="home">
    <p>Total: {{ total }} y la suma es {{suma}} </p>
    <br>
    <button @click="accionAumentar"> Aumentar </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations(["aumentar"]), //no hacer esto :( 
    ...mapActions(['accionAumentar'])
  },
  computed: {
    //Mapear el state
    ...mapState(["total", "suma"])
  },
};
</script>
