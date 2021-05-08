<template>
  <div class="mx-5">
  <div class= "my-4 py-3 border"
  v-for="p in posts"
  :key="p._id">
    <router-link :to="`/Detail/${p._id}`">
      <div >
          <h3> {{ p.text }}</h3>
          <h4> {{ p._id }}</h4>
      </div>
    </router-link>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'


export default {
    name: 'Tarjeta',
    props: {
    },
    computed: {
     ...mapState(['posts'])
    },
    methods: {
      ...mapActions(['getPosts'])
    },
    created() {
     this.getPosts()
    },
};
</script>

<style>
</style>