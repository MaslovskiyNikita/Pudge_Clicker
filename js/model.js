import {TextBlock, TitleBlock, PudgeBlock, PowerBlock, ButtonBlock} from "../classes/blocks.js"


export const model = [
    new TitleBlock("Pudge Clicker", {
        styles:`background: linear-gradient(to right, #4b0082, #493240);
                color: #ff66ff`
    }),
    new TextBlock(0),
    new PudgeBlock('img/pudge.jpg'),
    new PowerBlock("", {
        styles:`width: 350px;
                height: 20px;
                background-color: purple;
                margin: 0 auto`
    }),
    new ButtonBlock("BOOSTERS", {
        button_styles: `width: 150px;
                        height: 50px;font-size: 16px;
                        margin-right: 10px;margin-top: 10px;
                        background: linear-gradient(to right, #4b0082, #493240);
                        font-family: Arial, sans-serif;
                        font-weight: bold;
                        color: pink`
    }),
    new ButtonBlock("INFO", {
        button_styles: `width: 150px;
                        height: 50px;font-size: 16px;
                        margin-right: 10px;margin-top: 10px;
                        background: linear-gradient(to right, #4b0082, #493240);
                        font-family: Arial, sans-serif;
                        font-weight: bold;
                        color: pink`
    }),

]