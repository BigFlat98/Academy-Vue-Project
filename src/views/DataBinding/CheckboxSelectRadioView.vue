<template>
<div>
    <div>
        <h1>
            Check Box
        </h1>
        <h3>
            My Favorit Team
        </h3>
        <p>{{ favoriteTeam }}</p>
    </div>
    <input type="checkbox" name="a" id="" value="T1" v-model="favoriteTeam" /><!-- checkbox로 양방향 바인딩 가능. -->
    <label for="T1">T1</label>
    <input type="checkbox" name="b" id="" value="Gen.G" v-model="favoriteTeam" /><!-- 복수 선택 가능하므로 받는 값을 배열로 써줘야 함. -->
    <label for="Gen.G">Gen.G</label>
    <input type="checkbox" name="c" id="HLE" value="HLE" v-model="favoriteTeam" /><!-- 만든사람 지리는 듯 -->
    <label for="HLE">HLE</label><!--for에 id를 checkbox ID랑 동일하게 쓰면 텍스트 눌러도 체크됨.-->
    <br />
    <br />
    <hr />

    <div>
        <h1>select prac</h1>
        <h3>my favorite icecream</h3>
    </div>
    <p>{{Icecream}}</p>
    <select name="" id="" v-model="Icecream">
        <option value="">none</option>
        <option value="메로나">메로나</option>
        <option value="바밤바">바밤바</option>
        <option value="누가바">누가바</option>
    </select>

    <div>
        <h1>Radio prac</h1>
        <h3>my favorite Language</h3>
    </div>
    <p>{{language}}</p>
    <br />
    <div>
        <input type="radio" name="" id="kor" value="Korean" v-model='language' />
        <label for="Kor">Korean</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="jap" value="Japanese" v-model='language' />
        <label for="Jap">Japanese</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="spa" value="Spanish" v-model='language' />
        <label for="Spa">Spanish</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="eng" value="English" v-model='language' />
        <label for="Eng">English</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="none" value="" v-model='language' />
        <label for="none">none</label>
    </div>
    <br />
    <br />
    <br />
    <br />
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            favoriteTeam:['T1'],
            Icecream:"메로나",
            language:"",
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},
}
</script>