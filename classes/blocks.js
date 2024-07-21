import { row, col } from "../src/utils.js"

export class Block {
    constructor(type, value, options){
        this.type = type
        this.value = value
        this.options = options
    }
}

export class TitleBlock extends Block {
    constructor(value, options){
        super("title", value, options)
    }
    toHTML(){
        const styles = this.options.styles
        return  row(col(`<h1>${this.value}</h1>`), styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options){
        super("text", value, options)
    }
    toHTML(){
        return row(col(`<p id="counter" style="text-align: center">${this.value}</p>`))
    }
}

export class PudgeBlock extends Block {
    constructor(value, options){
        super("pudge", value, options)
    }
    toHTML(){
        return row(col(`<img src="${this.value}" id="clicker"></img>`))
    }
}

export class PowerBlock extends Block{
    constructor(value, options){
        super("powerblock", value, options)
    }
    toHTML(){
        const styles = this.options.styles
        return `<div class="health-bar" id="healthBar" style = "${styles}">${this.value}</div>`
    }
}

export class ButtonBlock extends Block{
    constructor(value, options){
        super("Buttons", value, options)
    }
    toHTML(){
        const styles = this.options.styles
        const buttonstyles = this.options.button_styles
        return `<button id="${this.value}" style = "${buttonstyles}">${this.value}</button>`
    }
}


