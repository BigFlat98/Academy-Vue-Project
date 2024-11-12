<template>
<div>
    <input type="text" v-model="userId">
    <button @click="clickEvent">클릭~!</button>
    <button @click="changeData">변경@</button>
    <br />
    <br />
    <input type="text" v-model.number='num1' /> + <!--.number을 적어주면 입력받은 값을 정수로 변경할 수 있음.-->
    <input type="text" v-model.number='num2' /> =
    <span>{{num1 + num2}}</span> <!-- 연산을 템플릿의 태그 안에서 수행할 수 있음. 연산은 정상적으로 이뤄지고 결과는 str형으로 나옴.-->
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            userId:'hhh',
            num1:0,
            num2:0,
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickEvent(){
            console.log(this.userId);

        },
        changeData(){
            this.userId = 'Doritos';
        },
    }
}
</script>