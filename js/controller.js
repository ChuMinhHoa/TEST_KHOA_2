let diem=0;
let answer_count=0
let answer_total=0;
let diemtext=document.getElementById("point");
let tongket=document.getElementById("tongket")
let img=document.getElementById("img")
let cl=document.getElementById("cl")

cl.onclick=()=>{
    document.getElementById("app").innerHTML='<wrapper-wrapper></wrapper-wrapper>'
    tongket.style.display="none";
    img.style.display="none";
    diemtext.innerHTML="0 point";
    diem=0
    answer_count=0
    answer_total=0
    document.getElementById("diem").innerHTML="";
}

export function addPoint(){
    diem+=10;
    if(diemtext!=null) diemtext.innerHTML=diem+" points";
    console.log(diem);
}
export function count(){
    answer_count+=1
}
export function set_total(value){
    answer_total=value;
}
export function check_total(){
    if (answer_count==answer_total) {
        tongket.style.display="flex";
        img.style.display="flex";
        
        document.getElementById("diem").innerHTML+="Điểm của bạn là: "+diem;
    }
    return false;
}