// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(mainUser) {
const source=$("#user-template").html()
const template = Handlebars.compile(source)
const newHTML = template(mainUser)
$(".user-container").append(newHTML)
    }

    _renderFriends(friends) {
        const source=$("#user-friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(friends)
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quoteInfo) {

    }

    _renderPokemon(pokemon) {
        const source=$("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemon)
        $(".meat-container").append(newHTML)
    }

    _renderMeat(para) {
        const source=$("#meat-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(para)
        $(".pokemon-container").append(newHTML)
    }

    render(data){
        this._renderUsers(data.mainUser)
        this._renderFriends(data.friends)
        this._renderMeat(data.para)
        this._renderPokemon(data.pokemon)
        
        //invokes all the individual _render methods
    }
}

