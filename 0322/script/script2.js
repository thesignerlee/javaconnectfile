//원시데이터(논리형 데이터 trus(1), false(0))
let a = false /* 묶음형 데이터가 아니라서 따옴표 붙이면 안 됨 */
let b = 1
console.log(a==b) /* == -> 비교 연산자의 같다 */
//원시데이터(null(비어있다), undefined(정의되지않음))
let c = 10 //선언o 대입o
let d //선언o 대입x
c = null //값이 대입된 후에 특정 상황에 따라 값을 제거할 경우
console.log(c) //null 값이 들어간 상태에서 지운 상태
console.log(d) //undefined 애초에 값이 대입되지 않은 상태
//----------------
let e = 10
let f = '0'
console.log(e+f)
console.log('-----------------------------')
//산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3 //나누고 난 나머지 값
console.log(num1,num2,num3,num4,num5)
console.log('-----------------------------')
let box1 = 1
/* box1 = box1+10 */ // 오른쪽부터 인식하는 특징
box1 += 10 /* 복합연산자, 복합 대입 */
console.log(box1) // 11
console.log('--------------------------------')
let box2=0
box2 = box2+10 // 복합대입 변경식 box2+=10
console.log(box2) // 결과값 예측 10
box2 = box2-5 // box2-=5
console.log(box2) // 5
box2 = box2*2 // box2*=2, box2에 = 뒤에 붙어 있는 2의 값을 곲한 다음에 대입해라(=) 라는 말을 간편하게 축약한 말
console.log(box2) // 10
box2 += '살 입니다.'
// window.alert(box2)
console.log('--------------------------')
let box3 = 10
console.log(box3)
let box4 = box3++ // box3의 값을 box4에 먼저 보내놓고 더하라는 뜻이므로 box4의 값은 10이 됨
console.log(box4, box3)
/* console.log(box3++) */ //후위연산 +를 어디에 붙이냐에 따라 값이 달라짐
/* console.log(++box3)  *///전위연산