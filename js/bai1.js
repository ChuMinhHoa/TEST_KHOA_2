let n = prompt("Nhap so luong phan tu mang 1:");
let m = prompt("Nhap so luong phan tu mang 2:");
n = parseInt(n);
m = parseInt(m);

let mang1=[];
let mang2=[];

let pt;

for (let i = 0; i < n; i++){
    pt=prompt("Nhap phan tu thu "+(i+1)+" cua mang 1:");
    mang1.push(pt);
}

for (let i = 0; i < m; i++){
    pt=prompt("Nhap phan tu thu "+(i+1)+" cua mang 2:");
    mang2.push(pt);
}

let mangKT=[];

for (let i=0;i<n;i++){
    if(mang2.indexOf(mang1[i])==-1) mangKT.push(mang1[i]);
}
for (let i=0;i<m;i++)
    if(mang1.indexOf(mang2[i])==-1) mangKT.push(mang2[i]);

console.log(mangKT);