<template>
  <nav>
    <span>Day1</span> : | <router-link to="/">Home</router-link> | <!--router-link 해당 요소를 눌렀을 때 to에 적힌 라우터로 이동하도록 하는 예약어-->
    <router-link to="/about">About</router-link> | <br />
    <span>Day2</span> : BindingPrac ->(|
    <router-link to="/test">Test</router-link> |
    <router-link to="/string">String</router-link> |
    <router-link to="/html">Html</router-link> |
    <router-link to="/attribute">Attribute</router-link> |
    <router-link to="/class">Class</router-link> |
    <router-link to="/input">Input</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link to="/tt">TT</router-link> |
    <router-link to="/CBS">CheckBoxSelectRadio</router-link> |
    ) <br /> 
    <span>Day3</span> : Event ->(
      | <router-link to="/click">Click</router-link> |
        <router-link to="/change">Change</router-link> |
        <router-link to="/change2">ChangePrac</router-link> |
        <router-link to="/key">Key</router-link> |
    )<br />
    :Extra ->(
      | <router-link to="/render">Render</router-link> |
        <router-link to="/rendershow">RenderShow</router-link> |
        <router-link to="/computed">Computed</router-link> |
        <router-link to="/watch">Watch</router-link> |
        <router-link to="/lifecycle">LifeCycle</router-link> |
    )<br />
    <span>Day4,5</span> : Reuse ->(
      | <router-link to="/pagetitle">Page</router-link> |
        <router-link to="/parentview">ParentView</router-link> |
        <router-link to="/grid">TableView</router-link> |
        <router-link to="/mygrid">Mygrid</router-link> |
    )
  </nav>
  <router-view/> <!--여기는 라우터를 통해 호출되는 컴포넌트를 띄우겠다는 코드. 이게 라우터를 호출하거나 하는건아님. 라우터 호출을 main.js에서 -->
</template>
<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
span{
  color:#31a344;
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
