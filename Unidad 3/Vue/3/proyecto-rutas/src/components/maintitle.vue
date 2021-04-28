<template>
    <div>
        <h1>{{ texto }}</h1>
    </div>    
</template>

 <script>
 export default {
     name: 'maintitle',
     props: {
        texto:{
            type: String,
            default: "Texto de ejemplo"
        }
     }
 }
 </script>

 <style scoped>
    h1{
        color: orange;
    }
 
 </style>