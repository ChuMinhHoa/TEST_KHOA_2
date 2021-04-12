const $template=document.createElement("template");
$template.innerHTML=/*html */
`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<div class="p-3 d-flex justify-content-center">
    <p class="btn btn-primary" id="answer">hihi</p>
</div>
`;

export default class Answer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$answer=this.shadowRoot.getElementById("answer");
    }
    static get observedAttributes(){
        return['answer']
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        this.$answer.innerHTML = newValue;
    }
}

window.customElements.define('answers-wrapper',Answer);

