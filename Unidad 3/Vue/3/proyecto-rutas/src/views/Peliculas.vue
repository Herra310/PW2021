<template>
  <div class="m-4">
      <Maintitle texto="Peliculas"/>
      <Card
      v-for="p in peliculas"
      :key="p.id"
      :titulo="p.title"
      :id="p.id"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import Maintitle from '../components/maintitle'
import Card from '../components/Card'

export default {
  components: { 
    Maintitle,
    Card
  },
  data() {
    return{
       peliculas: []
    }
  },
  methods:{
    /*consumirPeliculas(){
      fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
      .then(res => res.json())
      .then(data =>{
        console.log("fetch", data);
      })
      .catch(error => console.log(error));

    }*/
    async consumirPeliculas(){
      try{
        const res = await fetch('https://ghibliapi.herokuapp.com/films');
        const data = await res.json();
        console.log(data);
        this.peliculas = data;
      }catch(error){
        console.log(error);
      }
    }
  },
  created(){
    // metodos y datos cargados y asi
      this.consumirPeliculas();
  }
}
</script>

<style>

</style>