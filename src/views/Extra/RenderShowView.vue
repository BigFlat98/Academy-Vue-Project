<template>
<div>
    <p>who is your favorite player?</p>
    <input type="radio" name="" id="uno" value="손흥민" v-model="selectedPlayer" />
    <label for="uno">1. 슈퍼쏜</label>
    <input type="radio" name="" id="dos" value="황희찬" v-model="selectedPlayer" />
    <label for="dos">2. 황희찬</label>
    <input type="radio" name="" id="tres" value="김민재" v-model="selectedPlayer" />
    <label for="tres">3. 김민재</label>
    <input type="radio" name="" id="cuatro" value="황인범" v-model="selectedPlayer" />
    <label for="cuatro">4. 황인범</label>
    <input type="radio" name="" id="cinco" value="other" v-model="selectedPlayer" />
    <label for="cinco">5. 기타</label> 
    <!-- <input type="text" v-if="selectedPlayer==='other'" v-model="otherText"> -->
    <input type="text" v-show="selectedPlayer==='other'" v-model="otherText"> <!-- show는 dom에 엘리먼트는 있는데 display : none 상태임. v-if는 아예 dom에 아예 없음. 이 차이 -->
    <p>{{otherText}}</p>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedPlayer:"",
            otherText:"",
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
    label{
        margin-right: 10px;
    }
</style>