<template>
  <div class= "vistacarrito">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-8 col-md-6">
                  <h1>Carrito</h1>
                  <Carrito/>
                  <ul>
                      <li></li>
                  </ul>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import Carrito from '@/components/Carrito.vue'
export default {
    name: "Vistacarrito",
    components:{
        Carrito

    },
    setup(){


        return {

        }
    }
    

}
</script>

<style>

</style>