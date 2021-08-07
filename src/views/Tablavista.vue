<template>
<div class ="container">
  <div calss="row justify-content-center">
    <div class= "col-12 col-sm-10 col-md-8">
     <Tabla/>
    </div>
   </div> 
 </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
export default {
  name: "Tablavista",
  components: {
    Tabla,
  },
};
</script>

<style>
</style>