<template>
<div>
    <div v-html="htmlString"></div> <!-- html을 바인딩 하는 경우 블록 태그 안에 속성 v-html을 넣고 변수 명을 적어주면 됨-->
    <div v-html="htmlString" :style = "style1"></div> <!--style도 변수에 저장해서 사용할 수 있음. 보통 이 방법을 많이 씀.style scope에 정의해서 사용하는 것과 같은 방식-->
    <div v-html="htmlString" v-bind:style = "style1"></div> <!--원래 v-bind(속성 바인딩)라고 적어줘야 하는데 생략 가능. 양방향 불가-->
    <button @click="style1.color = 'red'">change the color</button> <!-- 인라인 태그에서 js에 있는 변수값을 변경.-->
                                                                    <!-- 과거 react가 과거에는 양방향 바인딩이 안됐음.-->
    <button @click="colors()">콘솔로그 보기</button>
</div>
</template>

<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            htmlString:'<h1 style="color:blue">hhh</h1>\n<p>Hello welcome to my site!</p>',
            style1: {
                color : 'green',
                fontSize : '30px',

            }
        };
    },
    setup(){},
    created(){
    },
    mounted(){},
    unmounted(){},
    methods:{
        colors (){
            console.log(this.style1.color);
        }
    }
}
</script>

