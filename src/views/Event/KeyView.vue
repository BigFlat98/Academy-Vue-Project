<template>
<div>
    <h2>
        how to use keyup trigger
    </h2>
    <!--<input type="search" name="" id="" value="" v-model="searchText" @keyup="checkEnter($event)" /> 1번 방법.vue에서 키보드 이벤트 값을 받고 싶다면 $event 로 적어주면 됨. 예약어임.-->
    <input type="search" name="" id="" v-model="searchText" @keyup.enter="startSearch" /> <!--2번 방법. vue의 키보드 이벤트는 각 키를 모두 예약어로 만들어 놔서 그냥 .~ 사용하면 됨-->
            <!-- 다른 이벤트에도 이런게 많음. @click.shift -> shift 누른 상태에서 클릭 -->
                
    <button @click="startSearch" >Search</button>
    <button type="submit" @click.prevent="startSearch" >prevented button</button> <!-- 이벤트 + prevent -> 실행시키고자 하는 함수만 실행시키고 다른 기능들(여기서는 submit기능)은 실행되지 않도록 함. -->
    <br />
    <h1 id="input값 출력용">
        {{ searchText2 }}
    </h1>
    <h4>prevent기능 이해(콘솔 확인)</h4>
    <input type="radio" @click.prevent="checkPrevent()">

    <br/><br/><br/><br/>

    <h1>prevent default 기능 구현</h1>
    <img src="images.jpeg" alt="" style="width:500px; height:auto;" @contextmenu.prevent=""/> <!-- 함수가 안들어가면 그냥 모든 이벤트 차단. -->
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    
    <!-- -->
    <h4>stopPropagation기능. event bubbling막기.(부모 태그에 이벤트가 있을 때 자식 태그에서 상황이 겹치면 적용이 되는 현상.)</h4>
    <input type="radio" @click.stop="checkPrevent()">

    <br/><br/><br/><br/>

    <h4>버블링된 상황 확인(공간 누르고 콘솔 확인!)</h4>
    <div class="parent" @click="parentClick()">
        <div class="child" @click.stop="childClick()"> <!-- .stop지우면 stopPropagation 기능 사라짐-->

        </div>
    </div>

    <br/><br/><br/><br/>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            searchText:"hello world",
            searchText2:"",
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startSearch(){
           this.searchText2 = this.searchText;
        },
        checkEnter(event){
            if(event.keyCode === 13){//이건 바닐라 방법
                this.startSearch();
            }
        },
        checkPrevent(){
            console.log("radio 선택됐음?");
        },
        parentClick(){
            console.log('부모 영역 클릭');
        },
        childClick(){
            console.log('자식 영역 클릭');
        },
        
    }
}
</script>

<style scoped>
.parent {
    border: 1px solid blue; display: inline-block;
}
.child {
    width: 50px; height: 50px; margin: 20px; background-color: aqua;
}
</style>