<template>

<div class="container">
  <div class="row">
    <div class="col">
      <select class="form-select" aria-label="Default select example" v-model="personajeSeleccionado" @change="personajeSeleccionado">
          <option v-for="(pers, i) in personajes" :key="i" :value="pers.imagen">
          {{pers.nombre}}
      </option>
        </select>
        <div>
        <img class="imagen" :src="personajeSeleccionado">
        </div>
    </div>
    </div>
  </div> 
  
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Imagen",
  props: {},
  setup() {
      let personajeSeleccionado=ref("")
      
      
let personajes=[
      {id:1,nombre:"Sofia",imagen:require('@/assets/imagen1.jpg')},
      {id:2,nombre:"Ava",imagen:require('@/assets/imagen2.jpg')},
      {id:3,nombre:"Liz",imagen:require('@/assets/imagen3.jpg')},
      {id:4,nombre:"Marilyn",imagen:require('@/assets/imagen4.jpg')}
      ]
      
    return {
        personajes,
        personajeSeleccionado
    };
  },
};
</script>

<style lang="scss" scoped>

.imagen{
  background-color: rgb(177, 175, 175);
  padding: 70px;
  border-radius: 55px;
  margin-top: 40px;

}
.container {
  padding: 50px;
  background-color: rgb(0, 0, 0);
  border-radius: 55px;
  

}
</style>



