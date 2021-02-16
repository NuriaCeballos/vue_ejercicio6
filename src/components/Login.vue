<template>
  <div class="container">
    <label :class="clases">{{ label1 }}</label>
    <input v-model="username" @keydown="comprobar" type="text" /><br />
    <label :class="clases">{{ label2 }}</label>
    <input v-model="password" @keydown="comprobar" type="text" /><br />
    <button @click="mostrar" type="button" class="btn btn-warning">Guardar</button>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Login",
  props: {
    label1: String,
    label2: String,
  },
  setup(props) {
    let username = ref("")
    let password = ref("")
    let clases = ref("label-bad")
    const comprobar = (e) => {
      clases.value = "label-ok"
    
      if (username.value == "pepe" && password.value== "1234")

        console.log("está bien escrito")
      else console.log("no esta bien")     
        
    
      
      
    };
    return {
      comprobar,
      clases,
      username,
      password,
     
      
      
    }
  },
};
</script>

<style lang="scss" scoped>
.label-bad {
  padding: 4px;
  color: beige;
  background: red;
}
.label-ok {
  padding: 5px;
  color: beige;
  background: green;
}
</style>