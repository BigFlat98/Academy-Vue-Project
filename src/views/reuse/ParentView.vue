<template>
<div>
    <h1>Parent Component</h1>
    <h3>receivedData from child component : {{receivedData}}</h3>
    <h3>{{ childData }}</h3>
    <button @click="changeValue" class="btn btn-danger">change childData</button>
    <div>
        <ChildComponent str="start" num=parentNum :bool=false  :arr=[1,2,3] :obj={} @change-num="getData" @child-send="getChildData" ref="child" /> 
        <!-- props변수를 사용하는 경우 속성 바인딩을 안하면 그냥 대입연산자에 문자열이 들어오는 것으로 인식함. 즉 num은 parentNum이라는 문자열이 들어감 
            @뒤에 원하는 이벤트 명을 적어주면 커스텀 이벤트가 자동으로 선언이 됨. 자식에서 emit함수의 파라미터에 이벤트 명과 같은 문자열을 전달해 주면 이벤트 발생

            **(중요) ref -> Vue에서 독립적으로 사용하는 이 컴포넌트의 id라고 생각하면 됨. 상위 컴포넌트의 jscript부분에서 this.$refs.~ref명~ 을 사용해 하위 컴포넌트에 있는 데이터나 메소드를 참조할 수 있음.-->

    </div>
</div>
</template>


<script>

export default{ 
    name:'',
    props:{
       
    },
    
    data(){
        return{
            parentNum:10,
            receivedData:'',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(data){//change-num 도 이벤트임 @click ="함수명" 이라 썼을 때 정의된 함수에 파라미터로 (event)라 써서 발생된 이벤트의 값을 파라미터로 받아올 수 있었음.
                      //여기도 동일하게 작동함. 정의 이벤트가 발생했을 때 자식에서 emit에 있는 이벤트 명 외의 다른 전달받는 데이터를 여기에 있는 파라미터에 받아옴.
                      //
            console.log("detData function has been called");
            console.log(data);
        },
        getChildData(data){
            this.receivedData = data;
        },
        changeValue(){
            this.$refs.child.childData = "this childData has been changed by parent component method"; //하위 컴포넌트에 있는 데이터를 직접 참조.
            this.$refs.child.childPrint();
            this.$refs.child.computedMethod; //computed method도 사용할 수 있음.
            //
        },
        
    },
    computed:{},
    watch:{}
}
</script>