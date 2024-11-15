<template>
<div>
    <p>{{str}}</p>
    <p>{{num}}</p>
    <p>{{bool}}</p>
    <p>{{arr}}</p>
    <p>{{obj}}</p>
    <p>{{childData}}</p>
    <select name="" id="" @change="callParent()" v-model="selectedNum">
        <option :value="n" v-for="n in arr" :key="n">{{ n }}</option>
    </select>
</div>
</template>


<script>
export default{ 
    name:'',
    props:{
        str:{
            type:String,
            default : "",
        },
        num:{
            type:Number,
            default : 0,
        },
        bool:{
            type:Boolean,
            default : true,
        },
        arr :{ // **배열과 object는 function으로 기본값을 지정해야 함.**
                //이유는 배열과 오브젝트는 여러 데이터가 나열돼있는 형태이고 이를 전달할 수가 없음. 때문에 함수 형태로 전달하는것임.
            type:Array,
            default : function(){
                return []
            },
        },
        obj:{
            type:Object,
            default : function(){
                return {}
            },
        },
        
    },
    components:{},
    data(){
        return{
            selectedNum:0,
            childData : 'the data from child component(this is childData)',
        };
    },
    setup(){},
    created(){},
    mounted(){
        this.$emit('child-send',this.childData); //mount되는 단계에서 상위 컴포넌트에 데이터 전달.
    },
    unmounted(){},
    methods:{
        callParent(){
            this.$emit('change-num',this.selectedNum); //callParent()가 호출되면 this.$emit은 상위 컴포넌트에 파라미터로 들어있는 값을 전달만 함.
                                                       //parentView에는 태그 안에 @change-num 이라고 사용자 정의 이벤트가 있고, 자식에서 이렇게 전달하기만 하면
                                                       //부모에서는 이벤트가 발생하는 것으로 인지함.

                                                       //emit은 파라미터의 순서대로 데이터 전달. 
                                                       //만약 부모의 커스텀 이벤트에서 이벤트를 발생했을 때(커스텀 이벤트 명과 동일한 문자열을 전달 받았을 때) 호출되는 함수의 파라미터가 2개라고 가정하면.
                                                       //여기서 전달할 때 이벤트 명 다음으로 전달해야하는 파라미터는 2개 이상이어야함. 안그럼 오류 발생(함수에 필요한 파라미터 수만큼 데이터가 안들어오니까)

        
        },
        childPrint(){
            console.log(this.childData)
        },
    },
    computed:{
        computedMethod(){
            console.log("computed method");
        },
    },
    watch:{}
}
</script>