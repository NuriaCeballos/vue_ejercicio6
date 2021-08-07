<template>
<div>
  <div class="row carrito">
    <div class="col-4"></div>
    <div class="col-8">
      <h3 v-html="titulo" ></h3>
      <p v-tex="descripcion"></p>  
      <Item/> 
    </div>
  </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
    name: "Carrito"

}
</script>

<style>
</style>