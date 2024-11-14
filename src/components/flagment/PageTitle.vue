<template>
<div>
    <h1>{{ title }}</h1>
    <h2>{{ number }}</h2>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    props:{
        title:{ // props 로 사용하는 변수를 정의해주는 보편적인 방법
            type:String, //자료형
            default: "page don't have title", //값을 안 넣었을 때 기본 값
            required: true, //true 일 때 type에서 정해놓은 자료형만으로 초기화 할 수 있도록 하는 코드
        },
        number: Number,
    },
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