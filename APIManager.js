//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
        mainUser : {},
        pokemon:{},
        para:{},
        friends:{}
        }
    }

    loadData(){
       $.get("https://randomuser.me/api/?exc=login",(response)=>{
           this.data.mainUser.name=response.results[0].name.first
           this.data.mainUser.lastname=response.results[0].name.last
           this.data.mainUser.state=response.results[0].location.state
           this.data.mainUser.city=response.results[0].location.city
           this.data.mainUser.picture=response.results[0].picture.medium
        }) 
           let i=Math.floor(Math.random()*900)
           $.get("https://pokeapi.co/api/v2/pokemon/"+i+"/",(response)=>{
               this.data.pokemon.pokename=response.name
               this.data.pokemon.pokepicture=response.sprites.front_default
               })
               $.get("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text",(response)=>{
                   this.data.para.p=response
           })
           this.data.friends.name = []
           for(let i=0;i<6;i++){
           $.get("https://randomuser.me/api/?exc=login",(response)=>{
               this.data.friends.name.push({first : response.results[0].name.first, last :response.results[0].name.last})
           })
        }


         
       
       //you should make all your API requests here
        //each request should update the `data` object accordingly
    }
}
