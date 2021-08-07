<template>

<div class="container">
  <div class="row">
    <div class="col">
      <select class="form-select" aria-label="Default select example" v-model="provincia" @change="verMunicipios">
          <option v-for="(prov,i) in provincias" :key="i" :value="prov.CODPROV">
          {{prov.NOMBRE_PROVINCIA}}
          </option>
        </select>
    </div>
    <div class="col">
     <select class="form-select" aria-label="Default select example" v-model="municipio">
          <option v-for="(muni,i) in municipios" :key="i" >
            {{muni.NOMBRE}}

            </option>  
        </select>
        </div>
    </div>
  </div> 
  
</template>

<script>
import {reactive,ref} from 'vue'

export default {
  name: "Provincias",
  props: {},
  setup() {
    let provincia=ref("")
    let provincias=reactive([])
    let municipios=reactive([])
    let municipio=""

// rellenando array de provincias
  fetch("https://www.el-tiempo.net/api/json/v2/provincias")
    .then(res=>res.json())
    .then (datos=>{
      datos.provincias.forEach(provincia => {
        provincias.push(provincia)
      });
      
    })
    // rellenando array de municipios
      function verMunicipios(){
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
        .then(res=>res.json())
        .then (datos=>{
          ///console.log(datos)
         //municipios.splice(0)
        datos.municipios.forEach(mun=>{
          console.log(mun)
          municipios.push(mun)
          
        })
      })
           
            
     // })

       /* function verInformacion(){
          fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value.COD_GEO}`)
        }*/

          
      }
           return {
             provincias,
             provincia,
             verMunicipios,
             municipios,
             municipio
    }    
    }
  }
</script>

<style>
.container {
  padding: 50px;
  background-color: chartreuse;
}
</style>



