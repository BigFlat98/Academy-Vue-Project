<template>
<div>
    <h1>PageView</h1>
    <br />
    <br />
    <PageTitle title="first component" number=10 /> <!-- main.js에 이미 정의해 놨기 때문에 따로 import없이 사용 가능 -->
</div>
</template>


<script>

export default{ 
    name:'',
    components:{}, //
    data(){
        return{

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},
    computed:{},
    watch:{}
}
</script>


<style scoped>
 h1{
    color: rgb(253, 79, 31);
 }
</style>