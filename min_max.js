let number=[17, 39, 61, 95, 47]
let min=number[0]
let max=number[0]

for(i=0;i<number.length;i++){
    if(number[i]<min){
        min=number[i]
    }
    if(number[i]>max){
        max=number[i]
    }
}

console.log("Numbers: "+number.join(" "))
console.log("Min: "+min)
console.log("Max: "+max)