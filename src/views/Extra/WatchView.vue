<template>
<div>
    <div>
        <span>use watch with no parameter : </span><input type="text" name="" id="" v-model="myName"> <br />
        <span>use watch with parameter(newValue,oldValue) : </span><input type="text" name="" id="" v-model="yourName"> <br />
        <span>watch에 들어가는 메서드의 파라미터는 2개로 정해져 있고 첫번째가 new , 두번째가 old / 파라미터 명은 원하는대로 사용하면됨</span>
    </div>
    <div>
        <p>{{ myName }}</p>
        <p>{{ yourName }}</p>
    </div>

    <div>
        <select name="" id="" v-model="selected">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
    </div>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            myName:"",
            yourName:"",
            selected:'',
            history:[],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},
    computed:{},
    watch:{ //데이터의 변수명과 같은 메서드를 watch에 정의해 놓으면 데이터가 변경될 때 computed와 같은 원리로 실행이됨.
            //주로 데이터 기록을 목적으로 사용함.
        myName(){
            return console.log(this.myName);
        },
        yourName(newValue,oldValue){
            console.log('oldValue : ',oldValue); //데이터가 바뀌기 전 값이 파라미터로 들어옴.
            console.log('newValue : ',newValue); //바뀐 데이터가 파라미터로 들어옴.
        },
        selected(newValue,oldValue){
            this.history.push(newValue);
            console.log(this.history);
        }
    },
}
</script>