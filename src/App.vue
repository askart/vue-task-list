<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Создание задачи</router-link> |
      <router-link to="/list">Список задач</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button, input[type="submit"] {
  height: 40px;
  padding: 5px 10px;
}

input[type="text"] {
  height: 40px;
  line-height: 30px;
  padding: 5px 10px;
}
</style>
