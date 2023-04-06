//나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
/* 100~90이면 A학점, 
89~80이면 B학점, 
79~70이면 C학점, 
69~60이면 D학점, 
59 이하이면 F학점이 나오게해주세요. */
let grade = 100
if (grade > 90 && grade < 101){
    console.log('나의 학점은 A 학점')
} else if(grade > 79 && grade < 90){
    console.log('나의 학점은 B 학점')
} else if(grade > 69 && grade < 80){
    console.log('나의 학점은 C 학점')
} else if (grade > 59 && grade <70){
    console.log('나의 학점은 D 학점')
} else if (grade < 60 && grade > 0){
    console.log('나의 학점은 F 학점')
} else {console.log('학점 아님')}