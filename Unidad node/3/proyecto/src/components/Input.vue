<template>
  <div>
    <label for="id"> </label>
    <input class="form-control" :id="id" :value="value" :type="tipo" :maxlength="maxlength" :disabled="dis" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    titulo: String,
    value: [String, Number],
    tipo: {
      type: String,
      default: "text",
    },
    maxlength: {
        type:Number,
        default: 100
    },
    dis: {
        type: Boolean,
        default: false
    },
    placeholder:{
        type:String,
        default: "Escribe aqui weon",
    }
  },
};
</script>

<style>
</style>