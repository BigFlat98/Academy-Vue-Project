<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="아.." />
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