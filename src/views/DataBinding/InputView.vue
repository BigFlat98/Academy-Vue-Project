<template>
<div>
    <input type="text" v-model="userId">
    <button @click="clickEvent">클릭~!</button>
    <button @click="changeData">변경@</button>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            userId:'hhh',

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickEvent(){
            console.log(this.userId);

        },
        changeData(){
            this.userId = 'Doritos';
        },
    }
}
</script>