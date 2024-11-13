<template>
<div>
    <h2>
        첫번째 select 변경시 두번째 select에 filter함수 적용된 list 출력
    </h2>
    <!-- <select name="" id="" @change="startTrain" v-model='selectedCity'> @change 값이 변경됐을 때 해당 함수 실행 -->
    <select name="" id="" v-model='selectedCity'> <!-- 이벤트 트리거 없이 사용하는 법은 그냥 결과 보이는 쪽에 함수를 직접 박아버림. 
                                                       이게 야무진게 그냥 변하는 값이 있으면 그 값을 호출하는 다른 부분들도 다시 렌더링 하는 반응성이 지려버림
                                                       트리거가 없어도 v-model이 트리거 기능도 한다는 것.-->
        <option value="">==select the city==</option>
        <option :value="city.cityCode" v-for="city in cityList" :key="city.cityCode">{{city.cityName}}</option>
    </select>
    &nbsp;
    <select name="" id="">
        <!-- <option :value="train.trainCode" v-for="train in selectedList" :key="train.trainCode">{{train.time}}</option> -->

        <option :value="train.trainCode" v-for="train in trainList.filter((train)=>train.cityCode === selectedCity)" :key="train.trainCode">{{train.time}}</option>
        <!-- 이벤트 트리거 없이 이렇게 만든 경우 필요한 리스트를 만들기위한 함수 호출을 태그 안에서 바로 할 수 있다. 이건 v-model 자체의 트리거 기능까지 포함돼 있기 때문에 가능.  -->
    </select>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedCity:'',
            cityList:[
                {
                    cityCode:'01',
                    cityName:'부천',
                },
                {
                    cityCode:'02',
                    cityName:'울산',
                },
                {
                    cityCode:'03',
                    cityName:'서울',
                },
            ],
            trainList:[
                {
                    cityCode:'01',
                    trainCode:'t01',
                    time:'10:10'
                },
                {
                    cityCode:'01',
                    trainCode:'t02',
                    time:'11:10'
                },
                {
                    cityCode:'01',
                    trainCode:'t03',
                    time:'12:10'
                },
                {
                    cityCode:'02',
                    trainCode:'t21',
                    time:'10:10'
                },
                {
                    cityCode:'02',
                    trainCode:'t22',
                    time:'11:10'
                },
                {
                    cityCode:'02',
                    trainCode:'t23',
                    time:'12:10'
                },
                {
                    cityCode:'03',
                    trainCode:'t31',
                    time:'10:10'
                },
                {
                    cityCode:'03',
                    trainCode:'t32',
                    time:'11:10'
                },
                {
                    cityCode:'03',
                    trainCode:'t33',
                    time:'12:10'
                },
            ],
            selectedList:[],

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startTrain(){
            this.selectedList = this.trainList.filter( //필터함수 사용하는 예제를 좀 써봐야 할 듯
                (train) => train.cityCode == this.selectedCity
            );
        },
    }
}
</script>