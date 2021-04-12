const $template = document.createElement("template");
$template.innerHTML=/*html */
` <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<div class="rounded border border-dark d-inline-block p-3">
    <div class="question">
        <h1 id="question">cau hoi 1?</h1>
    </div>
    <div id="all" class="d-none"></div>
    <div class="dapan rounded border border-dark" style="column-count:2;" id="answers">
        
    </div>
    <div class="correct_answer d-none" id="correct">hhh</div>
</div>
`;

export default class QuestionWrapper extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$question=this.shadowRoot.getElementById('question');
        this.$answers=this.shadowRoot.getElementById('answers');
        this.$correct=this.shadowRoot.getElementById('correct');
        this.$all=this.shadowRoot.getElementById('all');
        
    }
    static get observedAttributes(){
        return['question','answers','correct']
    }
    randomcautraloi(){
        let data=this.$all.innerHTML;
        data=data.split(",")
        while(data.length!=0){
            let $answers_new=document.createElement('answers-wrapper');
            let random=Math.floor(Math.random() * data.length);
            $answers_new.setAttribute("answer",data[random]);
            this.$answers.appendChild($answers_new); 
            console.log(data[random]);
            data.splice(random,1);
            
        }
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        
        switch(attrName){
            case 'question':
                this.$question.innerHTML=newValue;
                break;
            case 'answers':
                this.$all.innerHTML+=newValue;
                break;
            case 'correct':
                this.$all.innerHTML+=","+newValue;
                this.randomcautraloi();
                this.$correct.innerHTML=newValue;
                break;
        }
    }

}

window.customElements.define('q-wrapper',QuestionWrapper);