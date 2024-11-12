<template>
<div>
    <h1>calculator</h1>
    <input type="text" v-model.number="num1"> {{ mark }}
    <input type="text" v-model.number="num2"> = 
    <span>{{ result }}</span>
    
    <br /><br />
    <button @click='plus()'>plus</button>
    <button @click='minus()'>minus</button>
    <button @click='multi()'>multi</button>
    <button @click='div()'>div</button>

    <br /><br /><br />
    <hr />
    <br />
    <input type="checkbox" name="" id="plus" value="+" v-model="calSelect" />
    <label for="plus">plus</label>
    <input type="checkbox" name="" id="minus" value="-" v-model="calSelect" />
    <label for="minus">minus</label>
    <input type="checkbox" name="" id="multi" value="*" v-model="calSelect" />
    <label for="multi">multi</label>
    <input type="checkbox" name="" id="div" value="/" v-model="calSelect" />
    <label for="div">div</label>
    <table>
        <tbody>
            <tr v-for="(kind,index) in calSelect" :key='index'>
                <td>{{num1}}</td> <td>{{kind}}</td> <td>{{num2}}</td> <td>=</td> <td>{{ result1(kind) }}</td>
                <!-- 탬플릿 태그에 함수도 사용가능. 단 함수가 반드시 return이 필요함. -->
            </tr>
        </tbody>
    </table>

</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            num1 : 0,
            num2 : 0,
            mark : "",
            result : 0,
            calSelect : [],
            plusResult:0,
            minusResult:0,
            multiResutl:0,
            divResult:0,

            

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        plus(){
            this.mark = "+";
            this.result = this.num1 + this.num2 ;
        },
        minus(){
            this.mark = "-";
            this.result = this.num1 - this.num2 ;
        },
        multi(){
            this.mark = "*";
            this.result = this.num1 * this.num2 ;
        },
        div(){
            this.mark = "/";
            this.result = this.num1 / this.num2 ;
        },
        result1(kind){
            switch (kind){
                case '+':
                    return this.num1 + this.num2;    
                case '-':
                    return this.num1 - this.num2;  
                case '*':
                    return this.num1 * this.num2;  
                case '/':
                    return this.num1 / this.num2;   
            };
        },
    }
}
</script>