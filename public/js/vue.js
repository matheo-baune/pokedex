new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        pokemons:[],
        types:[],
        defaultType:"Tous",
        darkMode: false,
        pokemonAffiches : [],
        page : 1,
        affichageMobile: false
    },
    created:function(){
        this.getTypes();
        this.getPokemons();
    },
    mounted:function(){
        this.onResize();
        window.addEventListener('resize', this.onResize, {passive:true})
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
            xhr.open('get',"/pokemons/type/all")
            xhr.send()
        },
        getPokemonsByType:function(type){
            let xhr = new XMLHttpRequest()
            xhr.onload = () => {
                this.pokemons = JSON.parse(xhr.responseText)
                this.page = 1
                this.majPage(this.page)
            }
            xhr.open('get',"/pokemons/type/"+type)
            xhr.send()
        },
        majPage:function(page){
            this.pokemonAffiches = this.pokemons.slice((page-1)*3,(page-1)*3+3)
        },
        onResize:function(){
            this.affichageMobile = window.innerWidth < 1000
        }
    },
    beforeDestoy:function(){
        if(typeof window === "undefined") return;
        window.removeEventListener('resize', this.onResize, {passive:true});
    }
});