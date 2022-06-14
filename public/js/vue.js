new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        pokemons:[],
        types:[],
        defaultType:"Tous",
        darkMode: false
    },
    created:function(){
        this.getTypes();
        this.getPokemons();
    },
    methods:{
        getTypes:function(){
            let xhr = new XMLHttpRequest()
            xhr.onload = () => {
                this.types.push('Tous')
                JSON.parse(xhr.responseText).map(type => this.types.push(type))
            }
            xhr.open('get',"/types")
            xhr.send()
        },
        getPokemons:function (){
            let xhr = new XMLHttpRequest()
            xhr.onload = () => {
                this.pokemons = JSON.parse(xhr.responseText)
            }
            xhr.open('get',"/pokemons/all")
            xhr.send()
        },
        getPokemonsByType:function(type){
            let xhr = new XMLHttpRequest()
            xhr.onload = () => {
                this.pokemons = JSON.parse(xhr.responseText)
            }
            type = type === "Tous" ? "all" : type


            xhr.open('get',"/pokemons/"+type)
            xhr.send()
        }
    }
});