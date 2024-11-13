<template>
<div>
    <h1>조건부 렌더링</h1>
    <!--<button >조회</button>  모든 유저에게 보임. 
    <button v-if="userRole === 'A' || userRole==='S'">판매 물픔 등록</button>판매자, 관리자만 보임 
    <button v-if="userRole === 'A'">삭제</button>관리자만 보임 v-if 사용 -->

    <!-- 조건이 참인 경우에만 태그가 랜더링 됨
        인접한 형제 태그끼리 if, else if, else를 사용할 수 있다. 사이에 다른 내용이 들어가면 오류발생 -->
    <div v-if="userRole==='C'">
        <button>조회</button> 
    </div>
    <div v-else-if="userRole==='S'">
        <button >판매 물픔 등록</button>
        <button>조회</button> 
    </div>
    <div v-else>
        <button>삭제</button>
        <button>판매 물픔 등록</button>
        <button>조회</button> 
    </div>
    
    <!--조건부 렌더링에서 신경써야 할 것은 사용자가 많을 것 같은 내용이 먼저 if문에 조건에 부합해서 if문에 리소스가 적게 들도록 코딩하는 사고 방식이 필요함.-->
    
    
    <br /><br /><br /><br /><br /><br />
    
    
    <select name="" id="" v-model="userRole">
        <option value="A">admin</option>
        <option value="S">saller</option>
        <option value="C">customer</option>
    </select>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            userRole:'C',

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

button{
    margin: 0 20px;
}
</style>