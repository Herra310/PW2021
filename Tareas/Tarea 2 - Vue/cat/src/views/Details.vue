<template>
  <div>
    <div class="my-4" v-if="post">
        <h3> ID: {{ post._id }} </h3>
        <p class="text-success"> Fact: </p>
        <h2> {{ post.text }} </h2>
        <p class="text-success"> Fecha de creación:</p>
        <h5 class="text-secondary"> {{ post.createdAt }} </h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Details",
  computed:{ 
      ...mapState([ 'post' ])
  },
  methods:{
      ...mapActions([ 'getPost' ])
  },
  created(){
     this.getPost(this.$route.params._id);
  }
};
</script>

<style>

</style>