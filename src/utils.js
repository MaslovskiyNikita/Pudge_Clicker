export function row(block, styles = ""){
    return `<div class="row" style="${styles}">
                ${block}       
            </div>`
}

export function col(block, styles = ""){
    return  `<div class="col-sm" style = "${styles}">
                ${block}   
            </div>`
}