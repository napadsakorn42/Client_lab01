let score=83
let grade

if(score>=0 && score<=100){
    if(score>=80){
        grade='A'
    }
    else if(score>=70){
        grade='B'
    }
    else if(score>=60){
        grade='C'
    }
    else if(score>=50){
        grade='D'
    }
    else{
        grade='E'
    }
}
console.log(grade)