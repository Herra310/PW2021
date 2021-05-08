<template>
  <div class="random my-4 mx-4">
      <h2> Mi dato random </h2>
      <button class="btn btn-primary my-3" @click="newFact" type="button"> Obtener info </button>
      <hr>
      <div v-if="newFact">
          <h3> {{ ranpost.type }}</h3>
          <p> {{ ranpost.text }}</p>
          <h5 class="text-success" v-if="ranpost.status"> {{ ( ranpost.status.verified ? 'Verificado' : 'Sin informacion sobre su verificación') }} </h5>
      </div>  
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'


export default {
    name: 'Random',
    props: {
    },
    computed: {
     ...mapState(['ranpost'])
    },
    methods: {
      ...mapActions(['getRanPost']),
      newFact: function(event) {
        do{
            let ax = this.ranpost;
            this.getRanPost();
        }while(typeof this.ax !== 'undefined' && ax._id === this.ranpost._id) 
      }  
    },
  }
</script>

<style>

</style>
