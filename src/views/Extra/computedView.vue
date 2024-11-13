<template>
<div>
    <div>
        <p>{{title}} / {{date}} / {{create}}</p>
        <p>{{totalText}}</p>
    </div>
    <div>
        <input type="text" v-model.number="age">
        <p>{{age >= 20 ? '성인' : '미성년자'}}</p>
        <p>{{isAdult}}</p>
    </div>
    


</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            title:'what is computed?',
            date:'2024-11-13',
            create:'Vue3',
            age:20,
        };
    },
    computed:{ //computed에서 정의한 함수는 데이터처럼 작용함. 템플릿에서 사용할 함수를 여기에 모아 놓고 함수명만 가져다가 사용. 
                //기능적인 내용은 methods부분이랑 똑같음. 
                //함수가 완료됐을 때 특정된 값을 리턴하는 함수는 computed부분에 넣고.
                //함수가 어떠한 기능만 수행하는 경우(예를 들어 특정 데이터를 바꾸는 작업 등) methods 부분에 정의해서 사용하면 좋음.
                //computed부분이 필수는 아님. 하지만 이 파트에 적어놓으면 함수에 있는 데이터가 변경됐을 때 변경되자 마자 바로 리턴값이 변경됨.
                //하지만 methods부분은 메소드가 호출됐을 때만(랜더링이 됐을 때) 반환함.

                //computed의 작동 원리가 브라우저 캐시 메모리에 함수명 별로 리턴값을 '미리' 저장해 놓고 함수명이 나온 템플릿에 바로 값을 뿌려준다고 생각하면 됨.
                //즉 computed에 정의된 함수는 함수 내에 있는 값이 변할 때 이미 실행이 되는거임. 따로 호출 없이.
                //그 다음 템플릿에서 함수 호출시 이미 리턴 돼있는 값만 바로 줌.
                
                //methods부분에 있는 함수는 호출이 되야만 실행문이 실행해 결과가 리턴되는 방식.

                //둘의 속도차이가 있기보단 실행되는 상황이 다름. 아예 방식이 다름.

                //그리고 methods에 있는 함수는 템플릿에서 x()이렇게 호출해야 하지만 computed에 있는 이미 실행됐기 때문에 x 이렇게 호출하면 됨.
                // 함수 호출할 때 () 이 소괄호의 의미가 실행의 의미임.

                //computed는 랜더링이 다시 되더라도 값이 변한게 없다면 계산을 다시 하지 않음. 최적화에 최적화 돼있음.
                
        totalText(){
            return this.title +' / '+ this.date +' / '+ this.create;
        },
        isAdult(){
            return this.age >=20 ? '성인':'미성년자';
        },
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>