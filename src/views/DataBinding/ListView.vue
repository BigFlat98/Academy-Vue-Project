<template>
<div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Comp</th>
                <th>price</th>
                <th>count</th>
                <th>sum</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "pro in humidifier" :key="pro.id"> <!-- vue for문 db의 pk성질을 띄는 속성을 key에 반드시 넣어줘야 함.
                                                                만약 그런 속성이 없다면 (pro,index) in humidifier로 써주고 key에 index를 넣으면 됨.-->
                <td>{{pro.Id}}</td> 
                <td>{{pro.Name}}</td>
                <td>{{pro.Comp}}</td>
                <td>{{pro.price}}</td>
                <td> <input type="text" v-model.number='pro.qty'> </td>
                <td>&#8361; {{pro.qty * pro.price}}</td>
            </tr>
        </tbody>
    </table>
    <br />
    <br />
    <hr />
    <h1>bmi Calculator</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>High</th>
                <th>Wight</th>
                <th>BMI</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "p in person" :key="p.id"> <!-- vue for문 db의 pk성질을 띄는 속성을 key에 반드시 넣어줘야 함.
                                                                만약 그런 속성이 없다면 (pro,index) in humidifier로 써주고 key에 index를 넣으면 됨.-->
                <td>{{p.Id}}</td> 
                <td>{{p.Name}}</td>
                <td> <input type="text" v-model.number='p.High'> </td>
                <td> <input type="text" v-model.number='p.Wight'> </td>
                <td>{{p.Wight / (p.High * p.High)*10000}}</td>
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
            humidifier:[
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

            ],
            person:[
                {
                    Id:'1',
                    Name:'aaa',
                    High:0,
                    Wight:0,
                },
                {
                    Id:'2',
                    Name:'bbb',
                    High:0,
                    Wight:0,
                },
                {
                    Id:'3',
                    Name:'ccc',
                    High:0,
                    Wight:0,
                },
                {
                    Id:'4',
                    Name:'ddd',
                    High:0,
                    Wight:0,
                },

                
            ],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>