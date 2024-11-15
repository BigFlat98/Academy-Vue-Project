<template>
<div>
    <select name="" id="" class="form-select" aria-label="Default select example" @change="diffChange" v-model="selectedData">
        <option value="all">모두 보기</option>
        <option value="up">전일 상승</option>
        <option value="down">전일 하락</option>
    </select>
    <table class="table">
        <thead class="table table-bordered table-striped">
            <tr>
                <th v-show="selectedData === 'all'" >
                    모두 선택<input type="checkbox" :value="items" v-model="checkboxvalue">
                </th>
                <th :key="index" v-for="(col,index) in headers" scope="col">{{col.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for ="(item,i) in items" > 
                <td v-show="selectedData === 'all'">
                    <input type="checkbox" :value='item' v-model="checkboxvalue">
                </td>
                <td :key="col.key" v-for="(col,index) in headers" >{{item[col.key]}}</td>
            </tr> <!-- 훌륭한 방법. header에는 title과 key 속성을 갖는 object가 속성별로 들어가 있음. title은 속성의 명을 넣어주고 key에는 속성의 실제 key값을 갖음.
                        items는 데이터 오브젝트를 갖는 리스트를 갖고있고 행은 이 items로 하나씩 돌리는데 열은 headers만큼 돌리고 돌릴 때마다 속성 key에 맞는 값을 출력.
                        오브젝트에 있는 속성의 값을 참조하는 방식은 . 과 [] 둘 다 쓸 수 있음. 잊지말자!
                        item.col.key 방식으로 호출할 수도 있다. -->
        </tbody>
    </table>
    <p>{{checkboxvalue}}</p>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    props:{
        headers :{
            type : Array,
            default : function(){
                return []
            },
        },
        items:{
            type: Array,
            default : function(){
                return []
            }
        },
    },
    data(){
        return{
            selectedData : "all",
            checkboxvalue : [],

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        diffChange(){
            
            this.$emit('diff-change',this.selectedData);

        },
    },
    computed:{},
    watch:{}
}
</script>
<style scoped>
 *{
    margin: 20px;
 }
</style>