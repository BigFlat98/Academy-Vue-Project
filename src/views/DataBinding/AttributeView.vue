<template>
<div>
    <input type="text" name="" id="" v-model="userId"> <!--v-model 그냥 양방향 바인딩-->
    <button @click="checkId()">콘솔로그 보기(양방향 바인딩 확인)</button>
    <br />
    <br />
    <input type="search" v-model="text1"/>
    <button :disabled="text1 === ''">조회</button><!--특정 조건에서 바인딩이 되는 경우를 만들고 싶으면 바인딩 코드 적고 옆에 대입연산자로 조건을 넣으면 쉽게 적용할 수 있음-->
    <p :style='titleStyle'>{{ title }}</p>
    <img src="images.jpeg" alt="" style="width:500px; height:auto;" /> <!--src의 절대경로가 @로 설정돼있음.-->
    <img :src="sourceImage" alt="" style="width:500px; height:auto;" />
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId:'aaa',
            sourceImage:'images.jpeg',//이미지 src를 바인딩 해서 사용하고 싶다면 이미지가 public폴더에 있는 경우 파일명만 사용하면 됨.
                                      //만약 assets에 있는 파일을 바인딩하고 싶다면 경로를 require('경로')로 적어줘야 함.
                                      //require함수는 다른 위치에 있는 파일을 동적으로 접근하는 함수.
            title:'따봉',
            titleStyle:{
                color:'blue',
                fontSize:'30px',
            },
            text1:"",
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        checkId(){
            console.log(this.userId);
        }
    }
}
</script>