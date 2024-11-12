<template>
<div>
    <h1>사용자 : {{ userName }}</h1><!-- 텍스트 바인딩. 텍스트만 이렇게 사용함. 단방향 바인딩.-->
    <p>{{ msg }}</p>
</div>
</template>

<script>
export default {
    data (){ //데이터 정의 방법
        return {
            userName : 'hhh',
            msg : 'hello welcome to mysite'
        }
    }
}
</script>

<style>

</style>