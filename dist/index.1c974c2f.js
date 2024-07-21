const model = [
    {
        type: "title",
        value: "Pudge Clicker"
    },
    {
        type: "text",
        value: 0
    },
    {
        type: "pudge",
        value: "img/pudge.jpg"
    }
];
const Pudge_Clicker = document.querySelector("#app");
model.forEach((block)=>{
    let html = "";
    if (block.type === "title") html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>    
            </div>
        `;
    else if (block.type === "text") html = `
            <div class="row">
                <div class="col-sm">
                    <p id="counter" style="text-align: center">${block.value}</p>
                </div>    
            </div>
            `;
    else if (block.type === "pudge") html = `<div class="row">
                    <div class="col-sm">
                        <img src="${block.value}" id="clicker"></img>
                </div>    
            </div>`;
    Pudge_Clicker.insertAdjacentHTML("beforeend", html);
//function title(block){
//    return <div class="row">
//                <div class="col-sm">
//                    <h1>${block.value}</h1>
//            </div>    
//       </div>
//}
});

//# sourceMappingURL=index.1c974c2f.js.map
