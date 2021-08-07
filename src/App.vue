<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ejercicio6">Ejercicio6</router-link> |
    <router-link to="/tablavista">Tabla de datos</router-link> |
    <router-link to="/provinciasvista">Tiempo por provincias</router-link>|
    <router-link to="/imagenvista">Cambio de imagen</router-link>|
    <router-link to="/vistacarrito">Carrito</router-link>
    
    <router-view/> 
  </div>
  
  
 
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0d1310;
    }
  }
}
</style>
