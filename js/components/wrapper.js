const $template=document.createElement("template");
$template.innerHTML=/*html */
`
<div id="goicauhoi">
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
            this.$goicauhoi.appendChild($ques_wrapper);
        }
        console.log(datas.results);
    }
    connectedCallback(){
        this.getDatas();
    }

}

window.customElements.define('wrapper-wrapper',Wrapper);