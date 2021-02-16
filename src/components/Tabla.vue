<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <input v-model="concepto" placeholder="concepto" />
      </div>
      <div class="col-2">
        <input
          type="number"
          size="3"
          v-model="cantidad"
          placeholder="cantidad"
        />
      </div>
      <div class="col-2">
        <input type="number" size="3" v-model="precio" placeholder="precio" />
      </div>
      <div class="col-2">
        <button @click="agregar" class="btn btn-warning">Agregar</button>
      </div>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
         

        </tr>
      </thead>
      <tbody>
        <tr v-for="(dato, i) in datos" :key="i">
          <td><input type="number" size="3" v-model={{ dato.concepto }} placeholder="precio" /></td>
          <td>{{ dato.cantidad }}</td>
          <td>{{ dato.precio }}</td>
          <td>{{ dato.precio * dato.cantidad }}</td>
          <td><button @click="eliminar(i)" class="btn btn-warning">Eliminar</button></td>

        </tr>
      </tbody>
      <div class="total" colspan="3">
        Total: <span>{{ total }} </span>
      </div>
    </table>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "Tabla",
  props: {},
  setup() {
    let concepto = ref("");
    let cantidad = ref(0);
    let precio = ref(0);
    const datos = reactive([
      { concepto: "Pantalones vaqueros chico", cantidad: 2, precio: 30.99 },
      { concepto: "Camiseta básica chico", cantidad: 4, precio: 6.99 },
      { concepto: "Pijama unisex", cantidad: 1, precio: 12.5 },
      { concepto: "Deportivas Nike", cantidad: 1, precio: 80.0 },
    ]);

    const total = computed(() => {
      let acumulador = 0;
      datos.forEach((dato) => {
        acumulador += dato.cantidad * dato.precio;
      });
      return acumulador.toFixed(2); //2decimales
    });
    function agregar() {
      let nuevoObjeto = {
        concepto: concepto,
        cantidad: cantidad,
        precio: precio,
      };
      datos.push(nuevoObjeto);
    }
    function eliminar(id) {
      if (window.confirm("¿Quieres eliminar este registro?"))
      datos.splice(id,1);
    }

    return {
      datos,
      total,
      concepto,
      cantidad,
      precio,
      agregar,eliminar
    };
  },
};
</script>

<style>
</style>