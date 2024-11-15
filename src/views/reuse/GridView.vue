<template>
<div>
    <button @click="sendData" class="btn btn-warning">sendData</button>
    <SimpleGrid :headers="headerData" :items="dataForSend" @diff-change="changeDiff" />
</div>
</template>


<script>
import SimpleGrid from "@/components/flagment/SimpleGrid.vue"
export default{ 
    name:'',
    components:{"SimpleGrid":SimpleGrid},
    data(){
        return{
            headerData : [
                {title:"살 때",key:"sale"},
                {title:"팔 때",key:"buy"},
                {title:"전일대비",key:"diff"},
            ],
            allData : [],
            dataForSend : [],
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        sendData(){
            this.allData = [
            {  exchange : "미국 USD",
                sale : 1396,
                buy : 1420,
                diff : "전일 상승"
            },{  
                exchange : "유럽 EUR",
                sale : 1473,
                buy : 1502,
                diff : "전일 하락"
            },{  exchange : "일본 JPY",
                sale : 894,
                buy : 909,
                diff : "전일 하락"
            },{  exchange : "중국 CNY",
                sale : 192,
                buy : 202,
                diff : "전일 상승"
            }];
        },
        changeDiff(data){
            if(data ==='up'){
                this.dataForSend = this.allData.filter((pdata)=>{
                    return pdata.diff=='전일 상승'
                })
            }
            else if(data ==='down'){
                this.dataForSend = this.allData.filter((pdata)=>{
                    return pdata.diff=='전일 하락'
                })
            }
            else {
                this.dataForSend = this.allData;
            }
        }
    },
    computed:{},
    watch:{}
}
</script>