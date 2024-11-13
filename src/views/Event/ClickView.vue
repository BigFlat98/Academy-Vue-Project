<template>
<div>
    <p>Count : {{count}}</p>
    <button v-on:click="addCount">add</button>
    <button @click=minusCount()>minus</button>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            count:0,
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addCount(){
            this.count +=1;
        },
        minusCount(){
            this.count -=1;
        },

    }
}
</script>