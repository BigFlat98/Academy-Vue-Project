<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/><!--이 태그 자체가 밑의 스크립트에서 받은 컴포넌트 자체라고 생각하면 됨.
      태그 명을 js태그에서 import된 -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//여기서 import는 from에 나오는 파일 경로를 HellowWorld로 사용하겠다 라고 생각하면 됨. 약간 as랑 비슷한 느낌.

export default {//'@/components/HelloWorld.vue' 여기로 전달하는게 아닌 이 파일에 있는 템플릿에 Helloworld 컴포넌트를 보내줌.
  name: 'HomeView',
  components: {
    HelloWorld
  }
}

//즉 js파트에서 컴포넌트를 가져와서 이 파일 템플릿에 보내주는 전체적으로 컴포넌트를 가져오는 작업을 하는 과정임.
</script>

<!--scope를 적어줘야 이 컴포넌트에 해당되는 스타일만 정의, 없으면 전체 페이지에 적용돼버림.-->
<style scope>

</style>