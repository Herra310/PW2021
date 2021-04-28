<template>
  <div class="home">
    <Maintitle :texto="titulo" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import Maintitle from '../components/maintitle'

export default {
  name: 'Home',
  components: { 
    Maintitle
  },
  data() {
    return{
       titulo: "Home"
    }
  }
}
</script>
