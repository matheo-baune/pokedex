new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        pokemons:[],
        types:[],
        defaultType:"Tous",
        darkMode: false,
        pokemonAffiches : [],
        page : 1
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

                for(const index in this.pokemons){
                    if(index < 3){
                        this.pokemonAffiches.push(this.pokemons[index])
                    }
                }
            }
            xhr.open('get',"/pokemons/all")
            xhr.send()
        },
        getPokemonsByType:function(type){
            let xhr = new XMLHttpRequest()
            xhr.onload = () => {
                this.pokemons = JSON.parse(xhr.responseText)
                this.page = 1
                this.majPage(this.page)
            }
            type = type === "Tous" ? "all" : type
            xhr.open('get',"/pokemons/"+type)
            xhr.send()
        },
        majPage:function(page){
            this.pokemonAffiches = this.pokemons.slice((page-1)*3,(page-1)*3+3)
        }
    }
});