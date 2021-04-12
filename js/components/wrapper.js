import {set_total} from'../controller.js'
const $template=document.createElement("template");
$template.innerHTML=/*html */
`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<link rel="stylesheet" href="./css/style.css">
<div id="goicauhoi" class="w-100">
</div>
`;

export default class Wrapper extends HTMLElement{
   
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        
        this.$goicauhoi=this.shadowRoot.getElementById("goicauhoi");
    }
    async getDatas(){
        let datas=await (await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")).json();
        for(let item of datas.results){
            let $ques_wrapper = document.createElement('q-wrapper');
            $ques_wrapper.setAttribute("question", item.question);
            $ques_wrapper.setAttribute("answers", item.incorrect_answers);
            $ques_wrapper.setAttribute("correct", item.correct_answer);
            $ques_wrapper.classList.add('w-100');
            this.$goicauhoi.appendChild($ques_wrapper);
        }
        console.log(datas.results);
        set_total(datas.results.length)
    }
    next(){
        console.log(get_next());
    }
    connectedCallback(){
        this.getDatas();
    }

}

window.customElements.define('wrapper-wrapper',Wrapper);