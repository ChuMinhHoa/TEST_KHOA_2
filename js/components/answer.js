import {addPoint,count,check_total} from "../controller.js"
const $template=document.createElement("template");
$template.innerHTML=/*html */
`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<link rel="stylesheet" href="./css/style.css">
<div class="panel" id="panel"></div>
<div class="p-3 d-flex justify-content-center btn btn-primary m-3" id="bu">
    <p class="" id="answer">hihi</p>
</div>
`;

export default class Answer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$answer=this.shadowRoot.getElementById("answer");
        this.$bu=this.shadowRoot.getElementById("bu");
        this.$panel=this.shadowRoot.getElementById("panel");
        this.correct;
    }
    static get observedAttributes(){
        return['answer','correct']
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if (attrName=="answer") this.$answer.innerHTML = newValue;
        else if (attrName=="correct") this.correct= newValue;
    }
    connectedCallback(){
        this.$bu.onclick=()=>{
            if(this.correct=="true") {
                alert("Bạn đã trả lời đúng.")
                
                addPoint();
            }
            else alert("Bạn đã trả lời sai.")
            this.$panel.style.display="block";
            count();
            check_total();

        }
    }
    
}

window.customElements.define('answers-wrapper',Answer);

