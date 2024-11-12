<template>
  <nav>
    | <router-link to="/">Home</router-link> | <!--router-link 해당 요소를 눌렀을 때 to에 적힌 라우터로 이동하도록 하는 예약어-->
    <router-link to="/about">About</router-link> | BindingPrac ->(|
    <router-link to="/test">Test</router-link> |
    <router-link to="/string">String</router-link> |
    <router-link to="/html">Html</router-link> |
    <router-link to="/attribute">Attribute</router-link> |
    <router-link to="/class">Class</router-link> |
    <router-link to="/input">Input</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link to="/tt">TT</router-link> |
    <router-link to="/CBS">CheckBoxSelectRadio</router-link> |
    )
  </nav>
  <router-view/> <!--여기는 라우터를 통해 호출되는 컴포넌트를 띄우겠다는 코드. 이게 라우터를 호출하거나 하는건아님. 라우터 호출을 main.js에서 -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!--router-link , router-view -> 다 vue에서 사용하는 예약어-->
