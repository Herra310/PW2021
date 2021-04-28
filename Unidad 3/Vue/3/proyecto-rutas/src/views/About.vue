<template>
  <div class="about">
      <Maintitle :texto="titulo"/>
  </div>
</template>

<script >
import Maintitle from '../components/maintitle'

export default{
  name: 'About',
  components: {
      Maintitle
    },
  data() {
    return{
       titulo: "About"
    }
  }
}
</script>
