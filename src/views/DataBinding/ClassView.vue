<template>
<div>
    <div class="{text-red:hasError, active:isActive}">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩</div> <!-- 클래스 명이 저장된 배열을 바인딩하여 클래스를 적용시킬 수 있다.-->
    <div :class="class3">클래스 바인딩</div>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            isActive: false,
            hasError: false,
            class2:['active','text-red'],
            class3:['text-red','active:isActive'],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>
<style scoped>
    .text-red{
        color:red;
    }
    .active{
        background-color: blueviolet;
        font-weight:bold;
        font-size: 30px;

    }

</style>