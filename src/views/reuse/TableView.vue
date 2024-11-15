<template>
<div>
    <button class="btn btn-primary" @click="doSearch">조회</button>
    <SimpleGridVue :headers="headers" :items="humidifier" />
</div>
</template>


<script>
import SimpleGridVue from '@/components/flagment/SimpleGrid.vue'
export default{ 
    name:'',
    components:{'SimpleGridVue' : SimpleGridVue},
    data(){
        return{
             humidifier:[],
             headers:[
                {
                    title:"제품번호" , key:"Id"
                },
                {
                    title:"제품명" , key:"Name"
                },
                {
                    title:"회사명" , key:"Comp"
                },
                {
                    title:"가격" , key:"price"
                },
             ],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        doSearch(){
            this.humidifier = [
                {
                    Id:'1',
                    Name:'aaa',
                    Comp:'a1',
                    price:15000,
                    qty:0,
                },
                {
                    Id:'2',
                    Name:'bbb',
                    Comp:'b2',
                    price:20000,
                    qty:0,
                },
                {
                    Id:'3',
                    Name:'ccc',
                    Comp:'c3',
                    price:300,
                    qty:0,
                },
                {
                    Id:'4',
                    Name:'ddd',
                    Comp:'d4',
                    price:52000,
                    qty:0,
                },
                {
                    Id:'5',
                    Name:'eee',
                    Comp:'e5',
                    price:15000000,
                    qty:0,
                },

            ];
        },
    },
    computed:{},
    watch:{}
}
</script>