let input=
[
    {
        name:"Arsenal",
        points:60,
        GD:45
    },
    {
        name:"Chelsea",
        points:75,
        GD:39
    },
    {
        name:"MU",
        points:60,
        GD:29
    },
    {
        name:"MC",
        points:60,
        GD:45
    }
];
let maxPoints_ind;
let temp;

function sosanh(a,b) {
    if(a>b) return 1;
    else if(a==b) return 0;
    else return -1;
}

for(let i=0;i<input.length;i++) {
    maxPoints_ind=i;

    for(j=i;j<input.length;j++){
        if(input[j].points>input[maxPoints_ind].points) maxPoints_ind=j
        else 
        if(input[j].points==input[maxPoints_ind].points){
            if(input[j].GD>input[maxPoints_ind].GD) maxPoints_ind=j;
            else if(input[j].GD==input[maxPoints_ind].GD){
                if(input[j].name<input[maxPoints_ind].name) maxPoints_ind=j;
            }
        }
    }
    
    temp=input[i];
    input[i]=input[maxPoints_ind];
    input[maxPoints_ind]=temp;

    input[i].position=i+1;

}

console.log(input);