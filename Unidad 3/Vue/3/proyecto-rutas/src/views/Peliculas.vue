<template>
  <div>
      <Maintitle texto="Peliculas"/>
      <div
      v-for="p in peliculas"
      :key="p.id"
      >
      {{p.title}}
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Maintitle from '../components/maintitle'

export default {
  components: { 
    Maintitle
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
    // metodos y datos cargados si
      this.consumirPeliculas();
  }
}
</script>

<style>

</style>