<template>
<div>
    <div>
        <img src="lifecycle._trByeii.png" id="lifecycle" alt="">
        <p>
            각 단계 (setup(),mounted() 등..)은 컴포넌트의 script부분에서 함수 형태로 나타나있고 각 부분에 어떤 작업을 수행해 줄 지 내부에 정의하면 됨.
        </p>
        <br />
        <p>
            렌더러가 컴포넌트를 처리하는 과정은 우리가 갖고있는 여러 컴포넌트들 중 우리가 사용할 컴포넌트를 정하는 단계. 이 단계에서 컴포넌트 내부에 있는 컴포넌트도 모두 확인을 해 놓음.<br />
            그 후 옵션 api 초기화는 setup(){},mounted(){},.. 이 옵션을 우리가 적어준 내용으로 초기화 하는 단계. 위와 마찬가지로 컴포넌트 내부에 있는 컴포넌트도 모두 확인을 해 놓음.<br />
            <br />
            다음 단계에서 우리가 작성한 코드들로 html생성.
            <br />
            <span style="color:green;">랜더러가 첨포넌트를 처리하는 첫 부분부터 초기 랜더링 부분(dom을 생성하는 단계) 까지는 처음 페이지가 열리고 단 한번만 이뤄짐. <br />
            이후 데이터가 변경되면 컴포넌트들을 마운트 해서 끼워넣고 다른 컴포넌트를 끼웠을 때 기존 컴포넌트의 마운트를 해제하는 과정을 반복만함.</span>
        </p>
        <p>

        </p>
    </div>
    <br /><br /><br /><br />

    <h2>api hook description</h2>
    <ul>
        <li>
            <h4>setup(composition api)</h4>
            <p>
                옵션 api가 아닌 컴포지션 api(computed, watch, props..등등)를 실행하는 단계.
                vue3에서 도입됨.
            </p>
        </li>
        <li>
            <h4>beforeCreate(option api)</h4>
            <p>
                option Api가 초기화 되기 전에 수행이 필요한 내용을 처리하는 단계
            </p>
        </li>
        <li>
            <h4>Created(option api)</h4>
            <p>
                option Api가 초기화 된 후에 수행이 필요한 내용을 처리하는 단계.<br />
                (아직 html 구성 전이기 때문에 html을 직접 조작하는 수행은 이 단계에 진행해서는 안됨.<br />
                option api가 초기화 된 후이기 때문에 option api에 있는 데이터를 사용할 수 있다. 서버에 데이터 요청을 보내는 등의 작업 수행에 적합한 단계)
            </p>
        </li>
        <li>
            <h4>beforeMount(option api)</h4>
            <p>
                Dom이 구성되기 전 단계. 생각보다 Create단계와 큰 차이가 없음.-> 그냥 created에 씀.
            </p>
        </li>
        <li>
            <h4>Mounted(option api)</h4>
            <p>
                dom구성이 끝난 이후 진행. 거의 모든 작업을 수행할 수 있음.<br />
                html에서 트리거 없이 어떤 메서드가 실행돼야 하는 상황이 있는 경우. 해당 메서드를 여기에 정의해 놓는게 적합함.
            </p>
        </li>
        <li>
            <h4>beforUnmount(option api)</h4>
            <p>
                컴포넌트가 변경될 때 새로운 컴포넌트를 마운트 하고 기존 컴포넌트의 마운트 해제 요청이 들어감.(컴포넌트가 변경됐을 때 어떤 작업 수행이 남아있는 경우 즉각적으로 해제하진 않음.)<br />
                이 때 이 beforeUnmounted가 호출됨.
            </p>
        </li>
    </ul>
    <br /><br /><br />
    일반적으로 setup, created , mounted, unmounted 이 네 상황에 구분해서 많이 사용함.
    <br /><br /><br /><br />
    <br /><br /><br /><br />

    <h1>
        lifecycle을 직접 경험해 보아요
    </h1>
    <div>
        <label for="">가장 선호하는 언어는?</label>
        <select name="" id="">
            <option value="" v-for="lan in language" :key="lan.code"> {{lan.title}}</option>
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
            language:[],
        };
    },
    //vue life Cycile Hook
    setup(){}, //컴포지션 api 호출 *
    beforeCreate(){},//옵션 api 초기화 전, data() computed()등 호출
    created(){},//옵션 api 초기화 후 호출 *
    beforeMount(){},//컴포넌트 컴파일링 끝나고 dom생성 전 호출
    mounted(){ getLanguage() },//dom생성 완료 후 호출 *
    beforeUpdate(){},//reRendering 직전 호출
    update(){}, //reRendering 후 호출
    beforeUnmount(){},//unmount요청이 들어오면 호출
    unmounted(){}, //unmount수행 후 호출 *
    methods:{
        getLanguage(){
             this.language = [{code:'01',title:"javascript"}];
        },
    },
    computed:{},
    watch:{},
}
</script>
<style scoped>
#lifecycle{
    width: 500px;
    height: auto;
}
ul{
    list-style-type: none;
}
li{
    margin: 40px 0;
}
</style>
